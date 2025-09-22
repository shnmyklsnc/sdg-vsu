"use client";
import {
  articlesData,
  submissionsData,
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
  XIcon,
  Pin,
  PinOff,
} from "lucide-react";
import Link from "next/link";
import ArticleCard from "./article-card";
import { useEffect, useMemo, useRef, useState } from "react";
import { cn, sortArticlesByDate } from "@/lib/utils";
import { ArcTimeline } from "../magicui/arc-timeline";
import { SupportingEvidencesSection } from "./supporting-evidences";
import PageTitle from "../common/page-title";
import Strip from "../common/strip";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "../ui/sheet";

export default function SingleSDGView({ id }: { id: number }) {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  const [timelineWidth, setTimelineWidth] = useState<number>(0);
  const [miniNavigationIsVisible, setMiniNavigationIsVisible] =
    useState<boolean>(true);
  const [isHoveringNav, setIsHoveringNav] = useState<boolean>(false);

  const [isDocked, setIsDocked] = useState<boolean>(false);
  const [navPosition, setNavPosition] = useState<number>(50); // Percentage from top
  const sdgDescriptionRef = useRef<HTMLElement>(null);
  const lastSectionRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setTimelineWidth(window.outerWidth);
    }

    const savedDockState = localStorage.getItem("sdg-nav-docked");
    if (savedDockState !== null) {
      setIsDocked(JSON.parse(savedDockState));
    }
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    localStorage.setItem("sdg-nav-docked", JSON.stringify(isDocked));
  }, [isDocked]);

  useEffect(() => {
    if (
      !isDocked ||
      !sdgDescriptionRef.current ||
      !lastSectionRef.current ||
      !navRef.current
    ) {
      return;
    }

    const handleScroll = () => {
      const sdgTop = sdgDescriptionRef.current!.getBoundingClientRect().top;
      const lastSectionBottom =
        lastSectionRef.current!.getBoundingClientRect().top;
      const navHeight = navRef.current!.offsetHeight;
      const windowHeight = window.innerHeight;

      // Calculate boundaries
      const topBoundary = Math.max(0, sdgTop); // Can't go above SDG description
      const bottomBoundary = Math.min(
        windowHeight - navHeight,
        lastSectionBottom - navHeight
      );

      // Calculate ideal center position
      const idealPosition = (windowHeight - navHeight) / 2;

      // Constrain position within boundaries
      let finalPosition = idealPosition;
      if (idealPosition < topBoundary) {
        finalPosition = topBoundary;
      } else if (idealPosition > bottomBoundary) {
        finalPosition = bottomBoundary;
      }

      // Convert to percentage
      const percentage = (finalPosition / windowHeight) * 100;
      setNavPosition(percentage);
    };

    handleScroll(); // Initial position
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [isDocked]);

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

  useEffect(() => {
    if (isDocked) return; // Skip hover detection when docked

    let hideTimeout: NodeJS.Timeout;

    const handleMouseMove = (e: MouseEvent) => {
      const threshold = 100;
      const isNearRightEdge = window.innerWidth - e.clientX < threshold;

      if (isNearRightEdge || isHoveringNav) {
        setMiniNavigationIsVisible(true);
        clearTimeout(hideTimeout);
      } else {
        clearTimeout(hideTimeout);
        hideTimeout = setTimeout(() => {
          if (!isHoveringNav) {
            setMiniNavigationIsVisible(false);
          }
        }, 300);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(hideTimeout);
    };
  }, [isHoveringNav, isDocked]);

  return (
    <article role="main" className="relative">
      {/* SDG mini navigation */}
      {!isMobile && (
        <nav
          ref={navRef}
          className={cn(
            "fixed right-0 z-50 transition-all duration-300 ease-out",
            isDocked
              ? "translate-x-0 opacity-100"
              : miniNavigationIsVisible
                ? "translate-x-0 opacity-100"
                : "pointer-events-none translate-x-full opacity-0",
            !isDocked && "top-1/2 -translate-y-1/2"
          )}
          style={isDocked ? { top: `${navPosition}%` } : undefined}
          aria-label="SDG Mini Navigation"
          id="sdg-mini-navigation"
          onMouseEnter={() => setIsHoveringNav(true)}
          onMouseLeave={() => setIsHoveringNav(false)}
        >
          {/* Invisible trigger area - only when not docked */}
          {!isDocked && (
            <div className="absolute top-0 bottom-0 -left-20 w-20" />
          )}

          {/* Navigation content */}
          <div className="border-border/50 relative rounded-l-2xl border-l bg-transparent shadow-2xl backdrop-blur-md">
            {/* Control buttons */}
            <div className="border-border/50 flex items-center justify-end border-b p-2 px-3">
              <button
                onClick={() => setIsDocked(!isDocked)}
                className={cn(
                  "flex h-8 w-8 cursor-pointer items-center justify-center rounded-md transition-colors",
                  "hover:bg-muted",
                  isDocked && "text-primary dark:text-secondary"
                )}
                aria-label={isDocked ? "Undock navigation" : "Dock navigation"}
                title={isDocked ? "Undock navigation" : "Dock navigation"}
              >
                {isDocked ? (
                  <PinOff className="h-4 w-4" />
                ) : (
                  <Pin className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* SDG Grid */}
            <div className="p-3">
              <ol className="grid grid-cols-2 gap-2">
                {sdgs.map(sdgItem => (
                  <li key={sdgItem.id} className="relative">
                    <Link
                      href={`/sdgs/${sdgItem.id}`}
                      className={cn(
                        "relative block h-12 w-12 transition-all duration-200",
                        "hover:scale-110 hover:shadow-xl active:scale-95",
                        "group overflow-hidden rounded-md"
                      )}
                      title={`SDG ${sdgItem.id}: ${sdgItem.description}`}
                    >
                      {/* Active indicator ring */}
                      {sdgItem.id === id && (
                        <span className="ring-offset-background absolute inset-0 rounded-md ring-2 ring-offset-2" />
                      )}

                      {/* SDG Image */}
                      <Image
                        src={`/sdgs/${sdgItem.id}.png`}
                        alt={`SDG ${sdgItem.id}`}
                        width={120}
                        height={120}
                        className={cn(
                          "h-full w-full object-contain transition-all duration-200",
                          sdgItem.id === id
                            ? "scale-100"
                            : "opacity-80 group-hover:scale-105 group-hover:opacity-100"
                        )}
                      />
                    </Link>
                  </li>
                ))}

                {/* Last symmetry image */}
                <li className="relative">
                  <Link
                    href="/sdgs"
                    title="All SDGs"
                    className={cn(
                      "relative block h-12 w-12 transition-all duration-200",
                      "hover:scale-110 hover:shadow-xl active:scale-95",
                      "group overflow-hidden rounded-md"
                    )}
                  >
                    <Image
                      src="/sdgs/sdg.png"
                      alt="SDG"
                      width={120}
                      height={120}
                      className="h-full w-full object-contain opacity-60 group-hover:opacity-100"
                    />
                  </Link>
                </li>
              </ol>
            </div>

            {/* Edge indicator */}
            <div className="absolute top-1/2 -left-3 -translate-y-1/2">
              <div className="via-primary/20 dark:via-secondary/20 h-32 w-1 rounded-full bg-gradient-to-b from-transparent to-transparent" />
            </div>
          </div>
        </nav>
      )}

      {isMobile && (
        <>
          {/* FAB with SDG preview */}
          <button
            onClick={() => setMobileNavOpen(true)}
            className={cn(
              "fixed right-2 bottom-20 z-40 flex h-12 w-12 items-center justify-center rounded-full shadow-lg transition-all duration-300",
              "cursor-pointer border-2 p-1",
              "hover:shadow-xl active:scale-95",
              mobileNavOpen && "pointer-events-none scale-0 opacity-0"
            )}
            aria-label="Open SDG Navigation"
            style={{ backgroundColor: sdg.color }}
          >
            <Image
              src={`/sdgs/logo/${sdg.id}.png`}
              alt={`Current: SDG ${sdg.id}`}
              width={16}
              height={16}
              className="h-auto w-auto object-cover"
            />
          </button>

          <Sheet open={mobileNavOpen} onOpenChange={setMobileNavOpen}>
            <SheetContent
              side="bottom"
              className="h-1/2 overflow-y-auto"
              showClose={false}
            >
              {/* Header */}
              <SheetHeader className="bg-background fixed z-2000 -mt-1 grid w-full grid-cols-2 shadow-lg">
                <div className="w-fit">
                  <SheetTitle>Navigate to SDG</SheetTitle>
                  <SheetDescription>
                    Currently viewing: SDG {sdg.id}
                  </SheetDescription>
                </div>
                <button
                  className="text-foreground w-fit cursor-pointer self-start justify-self-end"
                  onClick={() => setMobileNavOpen(false)}
                >
                  <XIcon className="size-4" />
                  <span className="sr-only">Close</span>
                </button>
              </SheetHeader>

              {/* SDG Grid */}
              <ol className="grid grid-cols-3 gap-4 px-4 pt-24 pb-4 sm:grid-cols-4">
                {sdgs.map(sdgItem => (
                  <li key={sdgItem.id}>
                    <Link
                      href={`/sdgs/${sdgItem.id}`}
                      onClick={() => setMobileNavOpen(false)}
                      className="group"
                    >
                      <div
                        className={cn(
                          "relative aspect-square overflow-hidden rounded-xl transition-all duration-200",
                          "active:scale-95",
                          sdgItem.id === id && "ring-2 ring-offset-4"
                        )}
                      >
                        <Image
                          src={`/sdgs/${sdgItem.id}.png`}
                          alt={`SDG ${sdgItem.id}`}
                          width={240}
                          height={240}
                          className={cn(
                            "h-full w-full object-contain transition-opacity",
                            sdgItem.id === id
                              ? "opacity-100"
                              : "opacity-80 group-active:opacity-100"
                          )}
                        />
                      </div>
                      <p className="text-muted-foreground mt-2 line-clamp-1 text-center text-xs">
                        Goal {sdgItem.id}
                      </p>
                    </Link>
                  </li>
                ))}

                {/* All SDGs link */}
                <li>
                  <Link
                    href="/sdgs"
                    onClick={() => setMobileNavOpen(false)}
                    className="group"
                  >
                    <div className="relative aspect-square overflow-hidden rounded-xl transition-all duration-200 active:scale-95">
                      <Image
                        src="/sdgs/sdg.png"
                        alt="All SDGs"
                        width={240}
                        height={240}
                        className="h-full w-full object-contain opacity-60 group-active:opacity-80"
                      />
                    </div>
                    <p className="text-muted-foreground mt-2 text-center text-xs">
                      All Goals
                    </p>
                  </Link>
                </li>
              </ol>
            </SheetContent>
          </Sheet>
        </>
      )}

      {/* Hero section */}
      <PageTitle title={<>SDG {id}</>} />

      <section
        ref={sdgDescriptionRef}
        id="sdg-description"
        aria-label="SDG Description"
        className="relative mb-8 overflow-hidden lg:container"
        style={{ background: `${sdg.color}` }}
      >
        <div className="relative px-4 pt-4 pb-8">
          <div className="pointer-events-none z-0">
            <Image
              src="/logo/Mt Pangasugan.png"
              alt="Mount Pangasugan Wireframe Image"
              width={1000}
              height={400}
              className="absolute top-[50%] left-[50%] hidden -translate-x-1/2 opacity-10 dark:block"
            />

            <Image
              src="/images/pangasugan.jpg"
              alt="Mount Pangasugan Image"
              fill
              className="block object-cover opacity-10 dark:hidden"
            />
          </div>
          <div className="z-10 flex flex-col justify-between gap-14">
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
        </div>
        <Image
          src={`/sdgs/logo/${sdg.id}.png`}
          alt={`SDG ${sdg.id} Clean Logo`}
          width={200}
          height={200}
          className="absolute right-10 bottom-10 hidden h-[80px] w-auto object-cover lg:block"
        />
      </section>

      <section className="mb-4 px-4 lg:container lg:px-0">
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

      <section className="mb-16 px-4 lg:container lg:px-0">
        <div className="mb-4 flex flex-col gap-2">
          <h3 className="xs:text-3xl text-2xl font-bold" id="overview">
            Overview
          </h3>
          <div className="bg-primary dark:bg-secondary h-0.5 w-10" />
        </div>
        <p className="xs:text-base text-justify text-sm">{sdg.overview}</p>
      </section>

      <SupportingEvidencesSection
        submissions={submissionsData}
        metrics={sdg.metrics}
        sdg={sdg}
        impactRankingsYears={impactRankingsYearData}
      />

      <Strip />

      <section className="mb-16 px-4 lg:container lg:px-0">
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
        ref={lastSectionRef}
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
          className="w-full cursor-pointer"
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
