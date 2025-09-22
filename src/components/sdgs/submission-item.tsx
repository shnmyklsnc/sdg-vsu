import { Indicator, Metric, Submission } from "@/lib/types";
import { FileIcon, LinkIcon } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

export default function SubmissionItem({
  submission,
  sdgId,
  metric,
  indicator,
  year,
}: {
  submission: Submission;
  sdgId: number;
  metric: Metric;
  indicator?: Indicator;
  year: number;
}) {
  const filename = useMemo(() => {
    if (submission.url) {
      // Submission url for external links
      return submission.url;
    } else {
      if (indicator) {
        // Indicator-level submission
        return `/sdgs/${sdgId}/evidence?metric=${metric.id}&indicator=${indicator.id}&year=${year}&submissionId=${submission.id}`;
      }
      // Metric-level submission
      return `/sdgs/${sdgId}/evidence?metric=${metric.id}&year=${year}&submissionId=${submission.id}`;
    }
  }, [indicator, metric.id, sdgId, submission.id, submission.url, year]);

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
