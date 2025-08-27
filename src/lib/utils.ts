import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  Article,
  Document,
  GroupedDocuments,
  Target,
  TargetDocuments,
} from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function normalizeToArray<T>(value: T | T[] | undefined): T[] {
  if (value === undefined) return [];
  return Array.isArray(value) ? value : [value];
}

export function parseIndicator(indicator: string) {
  const parts = indicator.split("-");
  const suffix = parts.length > 1 ? parts[1] : null;

  // Check if the suffix starts with a digit
  const isDigitSuffix = suffix ? /^\d/.test(suffix) : false;

  return {
    main: parts[0],
    subgroup: isDigitSuffix ? null : suffix, // Only use as subgroup if it's a letter
    isDigitSuffix,
  };
}

export function groupDocumentsByTarget(
  documents: Document[],
  targets: Target[],
  sdgId: number
): TargetDocuments[] {
  return targets.map(target => {
    const grouped: GroupedDocuments = {
      direct: [],
      byIndicator: {},
    };

    // Filter documents that belong to this SDG and target
    documents.forEach(doc => {
      // Check if document belongs to this SDG
      if (!doc.relatedSdgs.includes(sdgId)) return;

      // Normalize targets and indicators to arrays
      const docTargets = normalizeToArray(doc.target);
      const docIndicators = normalizeToArray(doc.indicator);

      // Check if document belongs to this target
      const targetIndex = docTargets.indexOf(target.name);
      if (targetIndex === -1) return;

      // Get the corresponding indicator for this target
      const indicator = docIndicators[targetIndex];

      if (!indicator) {
        // Direct target document (no indicator)
        grouped.direct.push(doc);
      } else {
        // Parse the indicator
        const { main, subgroup } = parseIndicator(indicator);

        // Initialize indicator group if needed
        if (!grouped.byIndicator[main]) {
          grouped.byIndicator[main] = {
            mainDocs: [],
            subgroups: {},
          };
        }

        if (subgroup) {
          // Add to subgroup (only for letter suffixes)
          if (!grouped.byIndicator[main].subgroups[subgroup]) {
            grouped.byIndicator[main].subgroups[subgroup] = [];
          }
          grouped.byIndicator[main].subgroups[subgroup].push(doc);
        } else {
          // Add to main indicator docs (includes digit suffixes)
          grouped.byIndicator[main].mainDocs.push(doc);
        }
      }
    });

    // Sort all document arrays by date (newest first)
    grouped.direct = sortDocumentsByDate(grouped.direct);

    // Sort documents within each indicator group
    Object.keys(grouped.byIndicator).forEach(indicator => {
      grouped.byIndicator[indicator].mainDocs = sortDocumentsByDate(
        grouped.byIndicator[indicator].mainDocs
      );

      // Sort documents within each subgroup
      Object.keys(grouped.byIndicator[indicator].subgroups).forEach(
        subgroup => {
          grouped.byIndicator[indicator].subgroups[subgroup] =
            sortDocumentsByDate(
              grouped.byIndicator[indicator].subgroups[subgroup]
            );
        }
      );
    });

    return {
      target,
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
