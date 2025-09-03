"use client";
import {
  articlesData,
  documentsData,
  impactRankingsYearData,
  progressAndInfo,
  sdgs,
} from "@/lib/data";
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
import { sortArticlesByDate } from "@/lib/utils";
import { ArcTimeline } from "../magicui/arc-timeline";
import { InstitutionalDocumentsSection } from "./institutional-documents";
import PageTitle from "../common/page-title";
import Strip from "../common/strip";

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
      <PageTitle title={<>SDG {id}</>} />

      <section
        aria-label="SDG Description"
        className="relative mb-8 overflow-hidden lg:container"
        style={{ background: `${sdg.color}` }}
      >
        <div className="relative flex flex-col justify-between gap-14 px-4 pt-4 pb-8">
          <Image
            src="/logo/Mt Pangasugan.png"
            alt="Mount Pangasugan Wireframe Image"
            fill
            className="hidden h-auto w-auto object-contain opacity-10 dark:block"
          />
          <Image
            src="/images/pangasugan.jpg"
            alt="Mount Pangasugan Image"
            fill
            className="block h-auto w-auto object-cover opacity-10 dark:hidden"
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
              className="h-auto max-w-[42px] object-cover lg:hidden"
            />
          </div>
          <div className="flex flex-col gap-14">
            <div>
              <h2
                className="text-4xl font-bold tracking-tight text-white lg:text-5xl"
                id="sdg-description"
              >
                {sdg.description}
              </h2>
              <div className="mt-4 ml-1 h-0.5 w-20 bg-white" />
            </div>
            <div
              aria-label="SDG Navigation Controls"
              role="navigation"
              className="z-10 flex items-center gap-2"
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
        </div>
        <Image
          src={`/sdgs/logo/${sdg.id}.png`}
          alt={`SDG ${sdg.id} Clean Logo`}
          width={200}
          height={200}
          className="absolute right-10 bottom-10 hidden h-[80px] w-auto object-cover lg:block"
        />
      </section>

      <section className="mb-4 px-4 lg:container">
        <div className="mb-4 flex items-center gap-4">
          <div className="bg-primary dark:bg-secondary h-0.5 w-10" />
          <h3 className="xs:text-3xl text-2xl font-bold" id="related-articles">
            Related Articles
          </h3>
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
            <Button variant="link" className="dark:text-secondary">
              See more
              <SquareArrowOutUpRight />
            </Button>
          </div>
        )}
      </section>
      <Strip />

      <section className="mb-16 px-4 lg:container">
        <div className="mb-4 flex flex-col gap-2">
          <h3 className="xs:text-3xl text-2xl font-bold" id="overview">
            Overview
          </h3>
          <div className="bg-primary dark:bg-secondary h-0.5 w-10" />
        </div>
        <p className="xs:text-base text-justify text-sm">{sdg.overview}</p>
      </section>

      <InstitutionalDocumentsSection
        documents={documentsData}
        metrics={sdg.metrics}
        sdg={sdg}
        impactRankingsYears={impactRankingsYearData}
      />

      <section className="mb-16 px-4 lg:container">
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

      <div className="mb-7 block md:hidden">
        <button
          className="w-full"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src={`/sdgs/long/${sdg.id}.png`}
            alt={`SDG ${sdg.id} Logo Long`}
            width={1000}
            height={300}
            className="mb-2 h-auto w-full object-cover px-4"
          />
        </button>

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
      <div
        className="mb-7 hidden h-30 items-center md:grid md:grid-cols-[0.5fr_1fr_0.5fr] lg:container"
        aria-label="SDG Navigation Controls"
        role="navigation"
      >
        <Button
          asChild
          className="group text-primary dark:text-secondary justify-start"
          variant="ghost"
        >
          <Link href={`/sdgs/${prevSDG}`} className="flex items-center gap-2">
            <span className="transform transition-transform duration-200 group-hover:-translate-x-1 group-active:-translate-x-3">
              <ArrowLeft />
            </span>
            <span>Previous</span>
          </Link>
        </Button>

        <button
          className="w-full"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src={`/sdgs/long/${sdg.id}.png`}
            alt={`SDG ${sdg.id} Logo Long`}
            width={1000}
            height={300}
            className="mb-2 h-full w-full object-contain px-4"
          />
        </button>

        <Button
          className="group text-primary dark:text-secondary justify-end"
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
      <div className="bg-primary dark:bg-secondary h-2 w-full" />
    </article>
  );
}
