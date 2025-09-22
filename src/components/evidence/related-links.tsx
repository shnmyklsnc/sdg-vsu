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
    <div className="grid w-full gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {links.map((link, index) => {
        const Icon = getLinkIcon(link.url);
        const isExternal = isExternalUrl(link.url);

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="min-w-0"
          >
            <Card className="group bg-card hover:border-primary/50 relative overflow-hidden border p-4 transition-all hover:shadow-lg">
              <Link
                href={link.url}
                target={isExternal ? "_blank" : "_self"}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className="flex min-w-0 items-start justify-between gap-3"
              >
                <div className="flex min-w-0 flex-1 items-start gap-3">
                  <div className="bg-primary/10 group-hover:bg-primary/20 dark:bg-secondary/10 dark:group-hover:bg-secondary/20 flex-shrink-0 rounded-lg p-2 transition-colors">
                    <Icon className="text-primary dark:text-secondary h-4 w-4" />
                  </div>
                  <div className="min-w-0 flex-1 overflow-hidden">
                    <h4 className="text-foreground group-hover:text-primary dark:group-hover:text-secondary truncate font-medium transition-colors">
                      {link.label}
                    </h4>
                    <p className="text-muted-foreground mt-1 truncate text-xs">
                      {link.url}
                    </p>
                  </div>
                </div>
                {isExternal && (
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary dark:group-hover:text-secondary h-4 w-4 flex-shrink-0 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                )}
              </Link>

              {/* Hover effect gradient */}
              <div className="from-primary/5 dark:from-secondary/5 absolute inset-0 -z-10 bg-gradient-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
