"use client";
import { articlesData, documentsData, progressAndInfo, sdgs } from "@/lib/data";
import Image from "next/image";
import { Button } from "../ui/button";
import {
  ArrowLeft,
  ArrowRight,
  SquareArrowOutUpRight,
  Telescope,
} from "lucide-react";
import Link from "next/link";
import ArticleCard from "./article-card";
import { useEffect, useMemo, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { groupDocumentsByTarget, sortArticlesByDate } from "@/lib/utils";
import DocumentItem from "./document-item";
import { ArcTimeline } from "../magicui/arc-timeline";

export default function SingleSDGView({ id }: { id: number }) {
  const [timelineWidth, setTimelineWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimelineWidth(window.outerWidth);
    }
  }, []);

  const sdg = useMemo(() => sdgs.find(s => s.id === id)!, [id]);

  // Optimized articles retrieval
  const articles = useMemo(() => {
    const filtered = articlesData.filter(article =>
      article.relatedSdgs.includes(id)
    );
    const sorted = sortArticlesByDate(filtered);
    return sorted.slice(0, 3); // Top 3 most recent
  }, [id]);

  // Optimized documents retrieval and grouping
  const targetDocuments = useMemo(() => {
    return groupDocumentsByTarget(documentsData, sdg.targets, id);
  }, [id, sdg.targets]);

  // Progress and info timeline
  const timeline = useMemo(
    () => progressAndInfo.find(p => p.relatedSdg === sdg.id),
    [sdg.id]
  );

  // Navigation helpers
  const prevSDG = ((id - 2 + 17) % 17) + 1;
  const nextSDG = (id % 17) + 1;

  return (
    <article role="main">
      {/* Hero section */}
      <section className="bg-secondary dark:bg-primary relative overflow-hidden pt-54 pb-38">
        <div className="absolute top-15 left-1/2 aspect-square w-[160%] max-w-none -translate-x-1/2">
          <Image
            src="/logo/Wireframe Logo.png"
            alt="Background wireframe"
            width={800}
            height={400}
            priority
            className="opacity-10 brightness-900 filter dark:opacity-5 dark:brightness-50"
          />
          <div className="to-secondary dark:to-primary absolute inset-0 bg-gradient-to-b from-transparent from-10% via-transparent via-40% to-70%" />
        </div>
        <h1
          className="dark:text-secondary text-center text-5xl font-bold text-white"
          id={`sdg-${sdg.id}`}
        >
          SDG {id}
        </h1>
      </section>
      <div className="bg-primary dark:bg-secondary mb-5 h-5 w-full" />

      <section
        aria-label="SDG Description"
        className="relative mb-8 flex aspect-square flex-col justify-between gap-14 px-4 pt-4 pb-8"
        style={{ background: `${sdg.color}` }}
      >
        <Image
          src="/logo/Mt Pangasugan.png"
          alt="Mount Pangasugan Wireframe Image"
          width={1000}
          height={1000}
          className="absolute inset-0 top-35 hidden opacity-20 dark:block"
        />
        <Image
          src="/images/pangasugan.jpg"
          alt="Mount Pangasugan Image"
          width={1000}
          height={1000}
          className="absolute inset-0 block opacity-10 dark:hidden"
        />
        <div className="flex items-center justify-between">
          <Link
            href="/sdgs"
            className="z-1 font-medium text-white underline underline-offset-4"
          >
            Goals
          </Link>
          <Image
            src={`/sdgs/logo/${sdg.id}.png`}
            alt={`SDG ${sdg.id} Clean Logo`}
            width={50}
            height={50}
            className="max-w-[42px]"
          />
        </div>
        <div className="flex flex-col gap-14">
          <div>
            <h2
              className="text-4xl font-bold tracking-tight text-white"
              id="sdg-description"
            >
              {sdg.description}
            </h2>
            <div className="mt-4 ml-1 h-0.5 w-20 bg-white" />
          </div>
          <div
            aria-label="SDG Navigation Controls"
            role="navigation"
            className="flex items-center gap-2"
          >
            <Button asChild className="group text-white" variant="ghost">
              <Link
                href={`/sdgs/${prevSDG}`}
                className="flex items-center gap-2"
              >
                <span className="transform transition-transform duration-200 group-hover:-translate-x-1 group-active:-translate-x-3">
                  <ArrowLeft />
                </span>
                <span>Previous</span>
              </Link>
            </Button>

            <Button className="group text-white" variant="ghost" asChild>
              <Link
                href={`/sdgs/${nextSDG}`}
                className="flex items-center gap-2"
              >
                <span>Next</span>
                <span className="transform transition-transform duration-200 group-hover:translate-x-1 group-active:translate-x-3">
                  <ArrowRight />
                </span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mb-4 px-4">
        <div className="mb-4 flex items-center gap-4">
          <div className="bg-primary dark:bg-secondary h-0.5 w-10" />
          <h3 className="xs:text-3xl text-2xl font-bold" id="related-articles">
            Related Articles
          </h3>
        </div>
        {articles.length > 0 ? (
          <ol className="mb-4 flex flex-col gap-4">
            {articles.map(article => (
              <li key={article.href}>
                <ArticleCard article={article} />
              </li>
            ))}
          </ol>
        ) : (
          <p className="text-muted-foreground mb-4">
            No related articles found.
          </p>
        )}
        {articles.length > 3 && (
          <div className="flex w-full justify-end">
            <Button variant="link" className="dark:text-secondary">
              See more
              <SquareArrowOutUpRight />
            </Button>
          </div>
        )}
      </section>
      <div className="bg-primary dark:bg-secondary mb-5 h-5 w-full" />

      <section className="mb-8 px-4">
        <div className="mb-4 flex flex-col gap-2">
          <h3 className="xs:text-3xl text-2xl font-bold" id="overview">
            Overview
          </h3>
          <div className="bg-primary dark:bg-secondary h-0.5 w-10" />
        </div>
        <p className="xs:text-base text-justify text-sm">{sdg.overview}</p>
      </section>

      <section className="mb-8 px-4">
        <div className="mb-4 flex flex-col gap-2">
          <h3
            className="xs:text-3xl text-xl font-bold"
            id="institutional-documents"
          >
            Institutional Documents
          </h3>
          <div className="bg-primary dark:bg-secondary h-0.5 w-10" />
        </div>
        <div className="space-y-2">
          {targetDocuments.map(({ target, documents }) => {
            const hasIndicatorDocs =
              Object.keys(documents.byIndicator).length > 0;

            return (
              <div
                key={target.name}
                className="bg-card overflow-hidden rounded-md border shadow-sm"
              >
                {/* Target Header Section */}
                <div className="p-4">
                  <div className="flex items-start gap-4">
                    {/* SDG Icon */}
                    <Image
                      src={`/sdgs/${sdg.id}.png`}
                      alt={`SDG ${sdg.id} Logo`}
                      width={64}
                      height={64}
                      className="hidden dark:block"
                    />
                    <Image
                      src={`/sdgs/inverted/${sdg.id}.png`}
                      alt={`SDG ${sdg.id} Logo`}
                      width={64}
                      height={64}
                      className="block dark:hidden"
                    />

                    <div className="flex min-w-0 flex-1 flex-col gap-1">
                      <div className="text-muted-foreground text-sm">
                        Target
                      </div>
                      <h4 className="text-2xl font-bold tracking-wider">
                        {target.name}
                      </h4>
                      <p className="mt-1 text-justify text-sm whitespace-normal">
                        {target.description}
                      </p>
                    </div>
                  </div>

                  {/* Direct Target Documents */}
                  {documents.direct.length > 0 && (
                    <div aria-label="Main documents" className="mt-4">
                      <span className="text-muted-foreground text-sm font-medium">
                        {target.name}
                      </span>
                      <div className="mt-1 space-y-2">
                        {documents.direct.map(doc => (
                          <DocumentItem key={doc.id} doc={doc} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Indicator Documents Accordion */}
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem
                    value={`indicators-${target.name}`}
                    className="border-t border-b-0"
                  >
                    <AccordionTrigger
                      className="px-4 py-4"
                      disabled={!hasIndicatorDocs}
                    >
                      <span className="text-muted-foreground text-sm font-medium">
                        {hasIndicatorDocs ? "Other documents" : "No documents"}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="bg-muted border-t px-4 py-3">
                      <div className="space-y-4">
                        {Object.entries(documents.byIndicator).map(
                          ([mainIndicator, { mainDocs, subgroups }]) => (
                            <div key={mainIndicator}>
                              <h5 className="mb-2 text-base font-semibold tracking-wide">
                                {mainIndicator}
                              </h5>

                              {/* Main indicator documents */}
                              {mainDocs.length > 0 && (
                                <div className="mb-3 space-y-2">
                                  {mainDocs.map(doc => (
                                    <DocumentItem key={doc.id} doc={doc} />
                                  ))}
                                </div>
                              )}

                              {/* Subgroup accordions */}
                              {Object.keys(subgroups).length > 0 && (
                                <div className="space-y-2 pl-1">
                                  {Object.entries(subgroups).map(
                                    ([subgroup, docs]) => (
                                      <Accordion
                                        key={`${mainIndicator}-${subgroup}`}
                                        type="single"
                                        collapsible
                                        className="border-muted-foreground/20 border-l-2 pt-1 pl-3"
                                      >
                                        <AccordionItem
                                          value={`${mainIndicator}-${subgroup}`}
                                          className="border-0"
                                        >
                                          <AccordionTrigger className="px-0 py-2">
                                            <span className="text-sm font-medium">
                                              {mainIndicator}-{subgroup}
                                            </span>
                                          </AccordionTrigger>
                                          <AccordionContent className="px-0 pt-2 pb-1">
                                            <div className="space-y-2">
                                              {docs.map(doc => (
                                                <DocumentItem
                                                  key={doc.id}
                                                  doc={doc}
                                                />
                                              ))}
                                            </div>
                                          </AccordionContent>
                                        </AccordionItem>
                                      </Accordion>
                                    )
                                  )}
                                </div>
                              )}
                            </div>
                          )
                        )}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-7 px-4">
        <div className="mb-4 flex flex-col gap-2">
          <h3 className="xs:text-3xl text-2xl font-bold" id="progress-and-info">
            Progress and Info
          </h3>
          <div className="bg-primary dark:bg-secondary h-0.5 w-10" />
        </div>
        {timeline ? (
          <ArcTimeline
            data={timeline.timeline}
            defaultActiveStep={{
              time: `${timeline.timeline[Math.floor(timeline.timeline.length / 2)].time}`,
              stepIndex: 0,
            }}
            arcConfig={{
              circleWidth: (timelineWidth - 32) * Math.PI,
              angleBetweenMinorSteps: 0.4,
              lineCountFillBetweenSteps: 18,
              boundaryPlaceholderLinesCount: 45,
            }}
          />
        ) : (
          <ArcTimeline
            data={[
              {
                time: new Date().getFullYear().toString(),
                steps: [
                  {
                    icon: <Telescope width={20} height={20} />,
                    content: "No progress as of now. Check back later.",
                  },
                ],
              },
            ]}
            defaultActiveStep={{
              time: new Date().getFullYear().toString(),
              stepIndex: 0,
            }}
            arcConfig={{
              circleWidth: (timelineWidth - 32) * Math.PI,
              angleBetweenMinorSteps: 0.4,
              boundaryPlaceholderLinesCount: 45,
            }}
          />
        )}
      </section>

      <div className="mb-7 space-y-2">
        <Image
          src={`/sdgs/long/${sdg.id}.png`}
          alt={`SDG ${sdg.id} Logo Long`}
          width={300}
          height={300}
          className="w-full px-4"
        />

        <div
          aria-label="SDG Navigation Controls"
          role="navigation"
          className="flex items-center justify-between gap-2"
        >
          <Button
            asChild
            className="group text-primary dark:text-secondary"
            variant="ghost"
          >
            <Link href={`/sdgs/${prevSDG}`} className="flex items-center gap-2">
              <span className="transform transition-transform duration-200 group-hover:-translate-x-1 group-active:-translate-x-3">
                <ArrowLeft />
              </span>
              <span>Previous</span>
            </Link>
          </Button>

          <Button
            className="group text-primary dark:text-secondary"
            variant="ghost"
            asChild
          >
            <Link href={`/sdgs/${nextSDG}`} className="flex items-center gap-2">
              <span>Next</span>
              <span className="transform transition-transform duration-200 group-hover:translate-x-1 group-active:translate-x-3">
                <ArrowRight />
              </span>
            </Link>
          </Button>
        </div>
      </div>
      <div className="bg-primary dark:bg-secondary h-2 w-full" />
    </article>
  );
}
