import { Document } from "@/lib/types";
import { FileIcon } from "lucide-react";
import Link from "next/link";

export default function DocumentItem({ doc }: { doc: Document }) {
  return (
    <div className="flex items-start gap-2">
      <FileIcon className="dark:text-secondary text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
      <div className="min-w-0 flex-1">
        <Link
          href={`/documents/${doc.id}.pdf`}
          className="dark:text-secondary xs:text-base text-primary block truncate text-sm hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {doc.name}
        </Link>
        <div className="text-muted-foreground text-xs">
          {doc.date === "No Date"
            ? "No Date"
            : new Date(doc.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
        </div>
      </div>
    </div>
  );
}
