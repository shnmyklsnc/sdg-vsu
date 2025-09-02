import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Article,
  Document,
  GroupedDocuments,
  Metric,
  MetricDocuments,
} from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeToArray<T>(value: T | T[] | undefined): T[] {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

export function groupDocumentsByMetric(
  documents: Document[],
  metrics: Metric[],
  sdgId: number
): MetricDocuments[] {
  return metrics.map(metric => {
    const grouped: GroupedDocuments = {
      direct: [],
      byIndicator: {},
    };

    // Filter documents that belong to this SDG and metric
    documents.forEach(doc => {
      // Check if document belongs to this SDG
      if (!doc.relatedSdgs.includes(sdgId)) return;

      // Normalize metrics and indicators to arrays
      const docMetrics = normalizeToArray(doc.metric);
      const docIndicators = normalizeToArray(doc.indicator);

      // Check if document belongs to this metric
      const metricIndex = docMetrics.indexOf(metric.id);
      if (metricIndex === -1) return;

      // Get the corresponding indicator for this metric
      const indicatorId = docIndicators[metricIndex];

      if (!indicatorId) {
        // Direct metric document (no indicator)
        grouped.direct.push(doc);
      } else {
        // Group by indicator ID
        const indicator = metric.indicators.find(ind => ind.id === indicatorId);
        if (indicator) {
          if (!grouped.byIndicator[indicatorId]) {
            grouped.byIndicator[indicatorId] = {
              indicator,
              documents: [],
            };
          }
          grouped.byIndicator[indicatorId].documents.push(doc);
        }
      }
    });

    // Sort all document arrays by date (newest first)
    grouped.direct = sortDocumentsByDate(grouped.direct);

    // Sort documents within each indicator group
    Object.keys(grouped.byIndicator).forEach(indicatorId => {
      grouped.byIndicator[indicatorId].documents = sortDocumentsByDate(
        grouped.byIndicator[indicatorId].documents
      );
    });

    return {
      metric,
      documents: grouped,
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

export function sortDocumentsByDate(documents: Document[]): Document[] {
  return documents.sort((a, b) => {
    const aIsNoDate = a.date === "No Date";
    const bIsNoDate = b.date === "No Date";

    if (aIsNoDate && bIsNoDate) return 0;
    if (aIsNoDate) return 1;
    if (bIsNoDate) return -1;

    return (b.date as Date).getTime() - (a.date as Date).getTime();
  });
}
