import { Submission } from "@/lib/types";
import { FileIcon, LinkIcon } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

export default function SubmissionItem({
  submission,
}: {
  submission: Submission;
}) {
  const filename = useMemo(() => {
    if (submission.url) {
      return submission.url;
    } else {
      return `/documents/${submission.id}-${submission.filename}.pdf`;
    }
  }, [submission.filename, submission.id, submission.url]);

  return (
    <div className="flex items-start gap-2">
      {submission.url ? (
        <LinkIcon className="dark:text-secondary text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
      ) : (
        <FileIcon className="dark:text-secondary text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
      )}
      <div className="min-w-0 flex-1">
        <Link
          href={filename}
          className="dark:text-secondary xs:text-base text-primary block truncate text-sm hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {submission.name}
        </Link>
        <div className="text-muted-foreground text-xs">
          {submission.date === "No Date"
            ? "No Date"
            : new Date(submission.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
        </div>
      </div>
    </div>
  );
}
