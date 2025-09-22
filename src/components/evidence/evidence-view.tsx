"use client";

import { notFound } from "next/navigation";
import PageTitle from "../common/page-title";
import { useMemo } from "react";
import Link from "next/link";
import { FileText, SquareArrowOutUpRight } from "lucide-react";
import { articlesData, submissionsData } from "@/lib/data";
import { motion } from "motion/react";
import { PDFViewer } from "../common/pdf-viewer";
import RelatedLinks from "./related-links";
import { cn, sortArticlesByDate } from "@/lib/utils";
import ArticleCard from "../sdgs/article-card";
import { Button } from "../ui/button";
import Image from "next/image";

export default function EvidenceView({
  metric,
  indicator,
  year,
  submissionId,
  sdgId,
}: {
  metric: string;
  indicator?: string;
  year: string;
  submissionId: string;
  sdgId: string;
}) {
  const submission = useMemo(
    () => submissionsData.find(s => `${s.id}` === submissionId),
    [submissionId]
  );

  // Construct the PDF URL
  const pdfUrl = useMemo(() => {
    if (!submission) return "";

    return `/documents/${submission.id}-${submission.filename}.pdf`;
  }, [submission]);

  const articles = useMemo(() => {
    const filtered = articlesData.filter(article =>
      article.relatedSdgs.includes(parseInt(submissionId, 10))
    );
    const sorted = sortArticlesByDate(filtered);
    return sorted.slice(0, 3); // Top 3 most recent
  }, [submissionId]);

  if (!submission) {
    return notFound();
  }

  if (
    (typeof submission.metric === "string" && submission.metric !== metric) ||
    (Array.isArray(submission.metric) && !submission.metric.includes(metric)) ||
    (indicator &&
      ((typeof submission.indicator === "string" &&
        submission.indicator !== indicator) ||
        (Array.isArray(submission.indicator) &&
          !submission.indicator.includes(indicator))))
  ) {
    return notFound();
  }

  // Breadcrumb navigation
  const breadcrumbs = [
    { label: "SDGS", href: "/sdgs" },
    { label: `${sdgId}`, href: `/sdgs/${sdgId}` },
    {
      label: `Metric ${metric}`,
      href: `/sdgs/${sdgId}?metric=${metric}&year=${year}`,
    },
    ...(indicator
      ? [
          {
            label: `Indicator ${indicator}`,
            href: `/sdgs/${sdgId}?metric=${metric}&indicator=${indicator}&year=${year}`,
          },
        ]
      : []),
    { label: submission.name, href: null },
  ];

  return (
    <article role="main">
      <PageTitle title="Evidence Document" />

      <section className="px-4 lg:container lg:px-0">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {breadcrumbs.map((item, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <span className="text-muted-foreground mx-2">/</span>
                )}
                {item.href ? (
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-foreground transition-colors hover:underline"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-primary dark:text-secondary font-medium">
                    {item.label}
                  </span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Document Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-card mb-6 rounded-lg border p-6 shadow-sm"
        >
          <div className="flex items-start gap-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
            >
              <FileText className="text-primary dark:text-secondary mt-1 h-10 w-10" />
            </motion.div>
            <div className="flex-1">
              <h2 className="mb-2 text-xl font-semibold">{submission.name}</h2>
              <div className="text-muted-foreground flex gap-4 text-sm">
                <p>
                  Metric:{" "}
                  <span className="text-foreground font-medium">{metric}</span>
                </p>
                {indicator && (
                  <p>
                    Indicator:{" "}
                    <span className="text-foreground font-medium">
                      {indicator}
                    </span>
                  </p>
                )}
                <p>
                  Year:{" "}
                  <span className="text-foreground font-medium">{year}</span>
                </p>
              </div>
              {submission.relatedSdgs.length > 0 && (
                <div className="mt-2 flex items-center gap-2">
                  {submission.relatedSdgs.map(sdg => (
                    <Link key={sdg} href={`/sdgs/${sdg}`}>
                      {/* SDG Image */}
                      <Image
                        src={`/sdgs/${sdg}.png`}
                        alt={`SDG ${sdg}`}
                        width={120}
                        height={120}
                        className={cn(
                          "h-8 w-8 object-contain transition-all duration-200"
                        )}
                      />
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* PDF Viewer Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mb-8"
        >
          <PDFViewer url={pdfUrl} />
        </motion.div>
      </section>

      <section className="mb-16 px-4 lg:container lg:px-0">
        <div className="mb-4 flex flex-col gap-2">
          <h3 className="xs:text-3xl text-2xl font-bold" id="related-links">
            Related Links
          </h3>
          <div className="bg-primary dark:bg-secondary h-0.5 w-10" />
        </div>
        {submission.relatedLinks && submission.relatedLinks.length > 0 ? (
          <RelatedLinks links={submission.relatedLinks} />
        ) : (
          <div className="text-muted-foreground py-8 text-center">
            <p>No related links available for this document.</p>
          </div>
        )}
      </section>

      <section className="mb-4 px-4 lg:container lg:px-0">
        <div className="mb-4 flex flex-col gap-2">
          <h3 className="xs:text-3xl text-2xl font-bold" id="related-articles">
            Related Articles
          </h3>
          <div className="bg-primary dark:bg-secondary h-0.5 w-10" />
        </div>
        {articles.length > 0 ? (
          <ol className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:[&>li:last-child:nth-child(odd)]:col-span-2 lg:[&>li:last-child:nth-child(odd)]:col-span-1">
            {articles.map(article => (
              <li key={article.href}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-muted-foreground mb-4 py-10 text-center">
            No related articles found.
          </p>
        )}
        {articles.length > 3 && (
          <div className="flex w-full justify-end">
            <Button variant="link" asChild className="dark:text-secondary">
              <Link href="/articles">
                See more
                <SquareArrowOutUpRight />
              </Link>
            </Button>
          </div>
        )}
      </section>
    </article>
  );
}
