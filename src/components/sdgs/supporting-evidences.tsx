import { Submission, ImpactRankingsYear, Metric, SDG } from "@/lib/types";
import { groupSubmissionsByMetric } from "@/lib/utils";
import { useEffect, useMemo, useRef, useState } from "react";
import { YearSelectorArc } from "../magicui/timeline-selector";
import Image from "next/image";
import SubmissionItem from "./submission-item";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { useSearchParams } from "next/navigation";
import { InfoIcon } from "lucide-react";

export function SupportingEvidencesSection({
  submissions,
  metrics,
  sdg,
  impactRankingsYears,
}: {
  submissions: Submission[];
  metrics: Metric[];
  sdg: SDG;
  impactRankingsYears: ImpactRankingsYear[];
}) {
  const searchParams = useSearchParams();
  const metricRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const indicatorRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const yearData = useMemo(() => {
    return impactRankingsYears
      .map(iry => {
        // Count submissions for this impact rankings year
        const count = submissions.filter(
          submission => submission.impactRankingsYear === iry.id
        ).length;

        return {
          year: iry.year,
          count,
          impactRankingsYearId: iry.id, // Keep reference to the ID
        };
      })
      .sort((a, b) => a.year - b.year);
  }, [impactRankingsYears, submissions]);

  // Get year from URL params, fallback to middle year
  const yearParam = searchParams.get("year");
  const defaultYearData =
    yearData.length > 0 ? yearData[Math.floor(yearData.length / 2)] : undefined;

  const [selectedYearData, setSelectedYearData] = useState<
    | {
        year: number;
        impactRankingsYearId: number;
      }
    | undefined
  >(() => {
    if (yearParam) {
      const year = parseInt(yearParam);
      const found = yearData.find(y => y.year === year);
      if (found) {
        return {
          year: found.year,
          impactRankingsYearId: found.impactRankingsYearId,
        };
      }
    }
    return defaultYearData
      ? {
          year: defaultYearData.year,
          impactRankingsYearId: defaultYearData.impactRankingsYearId,
        }
      : undefined;
  });

  // Update URL params helper
  const updateUrlParams = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString());

    Object.entries(updates).forEach(([key, value]) => {
      if (value === null) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    });

    window.history.pushState({}, "", `/sdgs/${sdg.id}?${params.toString()}`);
  };

  // Update URL when year changes
  const handleYearChange = (year: number) => {
    const yearInfo = yearData.find(y => y.year === year);
    if (!yearInfo) return;

    setSelectedYearData({
      year: yearInfo.year,
      impactRankingsYearId: yearInfo.impactRankingsYearId,
    });

    updateUrlParams({ year: year.toString() });
  };

  const filteredMetrics = useMemo(() => {
    if (!selectedYearData) return [];

    return metrics.filter(
      metric =>
        metric.impactRankingsYear === selectedYearData.impactRankingsYearId
    );
  }, [metrics, selectedYearData]);

  // Filter submissions by selected impact rankings year
  const filteredSubmissions = useMemo(() => {
    if (!selectedYearData) return [];

    return submissions.filter(
      submission =>
        submission.impactRankingsYear === selectedYearData.impactRankingsYearId
    );
  }, [submissions, selectedYearData]);

  // Group filtered submissions by metric
  const metricSubmissions = useMemo(() => {
    return groupSubmissionsByMetric(filteredSubmissions, metrics, sdg.id);
  }, [filteredSubmissions, metrics, sdg.id]);

  // Check if there are any impact rankings years
  const hasYearData = yearData.length > 0;

  // Handle scrolling based on search params
  useEffect(() => {
    const metricParam = searchParams.get("metric");
    const indicatorParam = searchParams.get("indicator");

    const scrollTimeout = setTimeout(() => {
      if (indicatorParam && metricParam) {
        // Scroll to indicator if both metric and indicator are specified
        const indicatorKey = `${metricParam}-${indicatorParam}`;
        const indicatorRef = indicatorRefs.current[indicatorKey];
        if (indicatorRef) {
          indicatorRef.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
          // Open the accordion for this metric
          const accordionTrigger = document.querySelector(
            `[data-metric-accordion="${metricParam}"]`
          ) as HTMLElement;
          if (
            accordionTrigger &&
            accordionTrigger.getAttribute("data-state") === "closed"
          ) {
            accordionTrigger.click();
          }
        }
      } else if (metricParam) {
        // Scroll to metric if only metric is specified
        const metricRef = metricRefs.current[metricParam];
        if (metricRef) {
          metricRef.scrollIntoView({
            behavior: "smooth",
            block: "center",
            inline: "center",
          });
        }
      }
    }, 100);

    return () => clearTimeout(scrollTimeout);
  }, [searchParams, filteredMetrics]);

  // Handle metric click
  const handleMetricClick = (metricId: string) => {
    updateUrlParams({ metric: metricId, indicator: null });
  };

  // Handle indicator click
  const handleIndicatorClick = (metricId: string, indicatorId: string) => {
    updateUrlParams({ metric: metricId, indicator: indicatorId });
  };

  return (
    <section className="mb-16 lg:container">
      {/* Submissions Section */}
      <div className="px-4 lg:px-0">
        <div className="mb-4 flex flex-col gap-2">
          <h3
            className="xs:text-3xl text-xl font-bold"
            id="institutional-submissions"
          >
            Supporting Evidences
          </h3>
          <div className="bg-primary dark:bg-secondary h-0.5 w-10" />
        </div>

        {/* Year Selector */}
        {hasYearData && (
          <div className="mb-6">
            <YearSelectorArc
              years={yearData}
              selectedYear={selectedYearData?.year}
              onYearSelect={handleYearChange}
              className="mb-4"
            />
            <div className="text-center">
              <p className="text-muted-foreground text-sm">
                Showing data for the THE Impact Rankings{" "}
                {selectedYearData?.year}
              </p>
            </div>
          </div>
        )}

        {selectedYearData && (
          <div
            className="animate-in fade-in-50 space-y-2 duration-500"
            key={selectedYearData.year}
          >
            {metricSubmissions.filter(
              ({ metric }) =>
                metric.impactRankingsYear ===
                selectedYearData.impactRankingsYearId
            ).length === 0 ? (
              <div className="bg-card flex flex-col items-center justify-center rounded-md border p-8 shadow-sm">
                <div className="text-muted-foreground bg-muted/50 flex h-16 w-16 items-center justify-center rounded-full">
                  <InfoIcon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl font-medium">
                  No Metrics Available
                </h3>
                <p className="text-muted-foreground mt-2 max-w-md text-center text-sm">
                  There are no metrics available for SDG {sdg.id} in{" "}
                  {selectedYearData.year}. Please try selecting a different year
                  or check back later for updates.
                </p>
              </div>
            ) : (
              metricSubmissions.map(({ metric, submissions }) => {
                const submissionsLength = Object.keys(
                  submissions.byIndicator
                ).length;
                const hasIndicatorDocs = submissionsLength > 0;

                const metricIsBiblioMetric = metric.indicators.every(
                  indicator => indicator.dataSource === "bibliometric"
                );

                if (
                  metric.impactRankingsYear !==
                  selectedYearData.impactRankingsYearId
                )
                  return null;

                return (
                  <div
                    key={`${metric.id}-${selectedYearData.year}`}
                    id={`metric-${metric.id}`}
                    ref={el => {
                      metricRefs.current[metric.id] = el;
                    }}
                    className="bg-card relative scroll-mt-4 rounded-md border shadow-sm"
                  >
                    {/* Metric Header Section */}
                    <div className="p-4">
                      <div className="flex items-start gap-4">
                        {/* SDG Icon */}
                        <Image
                          src={`/sdgs/${sdg.id}.png`}
                          alt={`SDG ${sdg.id} Logo`}
                          width={64}
                          height={64}
                          className="hidden h-auto w-auto object-cover dark:block"
                        />
                        <Image
                          src={`/sdgs/inverted/${sdg.id}.png`}
                          alt={`SDG ${sdg.id} Logo`}
                          width={64}
                          height={64}
                          className="block h-auto w-auto object-cover dark:hidden"
                        />

                        <div className="flex min-w-0 flex-1 flex-col gap-1">
                          <div className="text-muted-foreground text-sm">
                            Metric
                          </div>
                          <h4
                            className="hover:text-primary cursor-pointer text-2xl font-bold tracking-wider transition-colors"
                            onClick={() => handleMetricClick(metric.id)}
                          >
                            {metric.id}
                          </h4>
                          <p className="mt-1 text-justify text-sm whitespace-normal">
                            {metric.name}
                          </p>
                        </div>
                      </div>

                      {/* Direct Metric Submissions */}
                      {submissions.direct.length > 0 && (
                        <div aria-label="Main submissions" className="mt-4">
                          <span className="text-muted-foreground text-sm font-medium">
                            {metric.id}
                          </span>
                          <div className="mt-1 space-y-2">
                            {submissions.direct.map(submission => (
                              <SubmissionItem
                                key={submission.id}
                                submission={submission}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Indicator Submissions Accordion */}
                    {!metricIsBiblioMetric && hasIndicatorDocs && (
                      <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue={
                          searchParams.get("metric") === metric.id &&
                          searchParams.get("indicator")
                            ? `indicators-${metric.id}`
                            : undefined
                        }
                      >
                        <AccordionItem
                          value={`indicators-${metric.id}`}
                          className="border-t border-b-0"
                        >
                          <AccordionTrigger
                            className="cursor-pointer px-4 py-4"
                            data-metric-accordion={metric.id}
                          >
                            <span className="text-muted-foreground text-sm font-medium">
                              Evidences
                            </span>
                          </AccordionTrigger>
                          <AccordionContent className="bg-muted border-t px-4 py-3">
                            <div className="space-y-4">
                              {Object.entries(submissions.byIndicator)
                                .sort(([a], [b]) =>
                                  a.localeCompare(b, undefined, {
                                    numeric: true,
                                  })
                                )
                                .map(
                                  ([
                                    indicatorId,
                                    { indicator, submissions: submissions },
                                  ]) => (
                                    <div
                                      key={`${indicatorId}-${selectedYearData.year}`}
                                      ref={el => {
                                        indicatorRefs.current[
                                          `${metric.id}-${indicatorId}`
                                        ] = el;
                                      }}
                                      className="scroll-mt-4"
                                    >
                                      <h5
                                        className="hover:text-primary cursor-pointer text-base font-semibold tracking-wide transition-colors"
                                        onClick={() =>
                                          handleIndicatorClick(
                                            metric.id,
                                            indicatorId
                                          )
                                        }
                                      >
                                        {indicatorId}
                                      </h5>
                                      <p className="text-muted-foreground mb-2 text-sm">
                                        {indicator.name}
                                      </p>
                                      <div className="space-y-2">
                                        {submissions.map(submission => (
                                          <SubmissionItem
                                            key={submission.id}
                                            submission={submission}
                                          />
                                        ))}
                                      </div>
                                    </div>
                                  )
                                )}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    )}
                  </div>
                );
              })
            )}
          </div>
        )}
      </div>
    </section>
  );
}
