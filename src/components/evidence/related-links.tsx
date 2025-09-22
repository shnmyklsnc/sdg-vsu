import { RelatedLink } from "@/lib/types";
import { isExternalUrl } from "@/lib/utils";
import { ArrowUpRight, FileText, Globe, LinkIcon } from "lucide-react";
import { motion } from "motion/react";
import { Card } from "../ui/card";
import Link from "next/link";

const getLinkIcon = (url: string) => {
  if (url.includes("pdf") || url.includes("document")) return FileText;
  if (url.includes("http") || url.includes("www")) return Globe;
  return LinkIcon;
};

export default function RelatedLinks({ links }: { links: RelatedLink[] }) {
  if (!links || links.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="text-muted-foreground">No related links available.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link, index) => {
        const Icon = getLinkIcon(link.url);
        const isExternal = isExternalUrl(link.url);

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="group relative overflow-hidden border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-lg">
              <Link
                href={link.url}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="flex items-start justify-between gap-3 min-w-0"
              >
                <div className="flex items-start gap-3 min-w-0 flex-1">
                  <div className="rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20 dark:bg-secondary/10 dark:group-hover:bg-secondary/20 flex-shrink-0">
                    <Icon className="h-4 w-4 text-primary dark:text-secondary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h4 className="font-medium text-foreground transition-colors group-hover:text-primary dark:group-hover:text-secondary truncate">
                      {link.label}
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground truncate">
                      {link.url}
                    </p>
                  </div>
                </div>
                {isExternal && (
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-primary dark:group-hover:text-secondary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                )}
              </Link>

              {/* Hover effect gradient */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-secondary/5" />
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
