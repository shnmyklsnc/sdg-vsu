import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Article,
  Submission,
  GroupedSubmissions,
  Metric,
  MetricSubmissions,
} from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeToArray<T>(value: T | T[] | undefined): T[] {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

export function groupSubmissionsByMetric(
  documents: Submission[],
  metrics: Metric[],
  sdgId: number
): MetricSubmissions[] {
  return metrics.map(metric => {
    const grouped: GroupedSubmissions = {
      direct: [],
      byIndicator: {},
    };

    documents.forEach(doc => {
      if (!doc.relatedSdgs.includes(sdgId)) return;

      // Normalize metrics and indicators to arrays
      const docMetrics = normalizeToArray(doc.metric);
      const docIndicators = normalizeToArray(doc.indicator);

      const metricIndex = docMetrics.indexOf(metric.id);
      if (metricIndex === -1) return;

      // Get the corresponding indicator for this metric
      const indicatorId = docIndicators[metricIndex];

      if (!indicatorId) {
        grouped.direct.push(doc);
      } else {
        // Group by indicator ID
        const indicator = metric.indicators.find(ind => ind.id === indicatorId);
        if (indicator) {
          if (!grouped.byIndicator[indicatorId]) {
            grouped.byIndicator[indicatorId] = {
              indicator,
              submissions: [],
            };
          }
          grouped.byIndicator[indicatorId].submissions.push(doc);
        }
      }
    });

    grouped.direct = sortSubmissionsByDate(grouped.direct);

    Object.keys(grouped.byIndicator).forEach(indicatorId => {
      grouped.byIndicator[indicatorId].submissions = sortSubmissionsByDate(
        grouped.byIndicator[indicatorId].submissions
      );
    });

    return {
      metric,
      submissions: grouped,
    };
  });
}

export function sortArticlesByDate(articles: Article[]): Article[] {
  return articles.sort((a, b) => {
    // Handle "No Date" cases
    const aIsNoDate = a.datePublished === "No Date";
    const bIsNoDate = b.datePublished === "No Date";

    if (aIsNoDate && bIsNoDate) return 0;
    if (aIsNoDate) return 1;
    if (bIsNoDate) return -1;

    // Both have dates - sort descending (newest first)
    return (
      (b.datePublished as Date).getTime() - (a.datePublished as Date).getTime()
    );
  });
}

export function sortSubmissionsByDate(submissions: Submission[]): Submission[] {
  return submissions.sort((a, b) => {
    const aIsNoDate = a.date === "No Date";
    const bIsNoDate = b.date === "No Date";

    if (aIsNoDate && bIsNoDate) return 0;
    if (aIsNoDate) return 1;
    if (bIsNoDate) return -1;

    return (b.date as Date).getTime() - (a.date as Date).getTime();
  });
}
