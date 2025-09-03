"use client";

import { articlesData } from "@/lib/data";
import Image from "next/image";
import ArticleCard from "../sdgs/article-card";
import { sortArticlesByDate } from "@/lib/utils";
import { useEffect, useMemo, useState } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

const ARTICLES_PER_PAGE = 9;

export default function ArticlesList({ page = 1 }: { page?: number }) {
  const [isMobile, setIsMobile] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const sortedArticles = useMemo(() => {
    return sortArticlesByDate([...articlesData]);
  }, []);

  // Calculate pagination values
  const totalPages = Math.ceil(sortedArticles.length / ARTICLES_PER_PAGE);
  const currentPage = Math.min(Math.max(1, page), totalPages); // Ensure page is within bounds

  useEffect(() => {
    if (typeof window !== "undefined") {
      const checkMobile = () => {
        setIsMobile(window.innerWidth < 425);
      };
      const checkDesktop = () => {
        setIsDesktop(window.innerWidth > 768);
      };

      checkMobile();
      checkDesktop();

      window.addEventListener("resize", checkMobile);
      window.addEventListener("resize", checkDesktop);

      return () => {
        window.removeEventListener("resize", checkMobile);
        window.removeEventListener("resize", checkDesktop);
      };
    }
  }, []);

  // Get articles for current page
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
    const endIndex = startIndex + ARTICLES_PER_PAGE;
    return sortedArticles.slice(startIndex, endIndex);
  }, [sortedArticles, currentPage]);

  // Generate page numbers to display
  const pageNumbers = useMemo(() => {
    const pages: (number | string)[] = [];
    const maxVisible = isDesktop ? 7 : 5; // Maximum number of page buttons to show

    if (totalPages <= maxVisible) {
      // Show all pages
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      if (currentPage > 3) {
        pages.push("...");
      }

      if (isMobile) {
        pages.push(currentPage);
      } else {
        // Show pages around current page
        const start = Math.max(2, currentPage - 1);
        const end = Math.min(totalPages - 1, currentPage + 1);

        for (let i = start; i <= end; i++) {
          pages.push(i);
        }
      }

      if (currentPage < totalPages - 2) {
        pages.push("...");
      }

      // Always show last page
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages, isMobile, isDesktop]);

  return (
    <section className="mb-5">
      <section className="bg-secondary dark:bg-primary relative overflow-hidden pt-54 pb-38">
        <div className="absolute top-15 left-1/2 aspect-square w-[160%] max-w-none -translate-x-1/2">
          <Image
            src="/logo/Wireframe Logo.png"
            alt="Background wireframe"
            width={800}
            height={400}
            priority
            className="h-auto w-auto object-cover opacity-10 brightness-900 filter dark:opacity-5 dark:brightness-50"
          />
          <div className="to-secondary dark:to-primary absolute inset-0 bg-gradient-to-b from-transparent from-10% via-transparent via-40% to-70%" />
        </div>
        <h1 className="dark:text-secondary text-center text-5xl font-bold text-white">
          Articles
        </h1>
      </section>
      <div className="bg-primary dark:bg-secondary mb-5 h-5 w-full" />

      <section className="mb-4 px-4">
        {paginatedArticles.length > 0 ? (
          <>
            <ol className="mb-8 flex flex-col gap-4">
              {paginatedArticles.map(article => (
                <li key={article.href}>
                  <ArticleCard article={article} />
                </li>
              ))}
            </ol>

            {/* Pagination */}
            {totalPages > 1 && (
              <nav
                className="flex items-center justify-center gap-1"
                aria-label="Pagination Navigation"
              >
                {/* Previous Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  disabled={currentPage === 1}
                  asChild={currentPage !== 1}
                >
                  {currentPage === 1 ? (
                    <span className="cursor-not-allowed">
                      <ChevronLeft className="h-4 w-4" />
                    </span>
                  ) : (
                    <Link href={`/articles?page=${currentPage - 1}`}>
                      <ChevronLeft className="h-4 w-4" />
                      <span className="sr-only">Previous page</span>
                    </Link>
                  )}
                </Button>

                {/* Page Numbers */}
                <div className="flex items-center gap-1">
                  {pageNumbers.map((pageNum, index) => {
                    if (pageNum === "...") {
                      return (
                        <span
                          key={`ellipsis-${index}`}
                          className="text-muted-foreground px-3"
                        >
                          ...
                        </span>
                      );
                    }

                    const isActive = pageNum === currentPage;

                    return (
                      <Button
                        key={pageNum}
                        variant={isActive ? "default" : "ghost"}
                        size="sm"
                        className={isActive ? "" : "hover:bg-accent"}
                        asChild={!isActive}
                      >
                        {isActive ? (
                          <span aria-current="page">{pageNum}</span>
                        ) : (
                          <Link href={`/articles?page=${pageNum}`}>
                            {pageNum}
                          </Link>
                        )}
                      </Button>
                    );
                  })}
                </div>

                {/* Next Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  disabled={currentPage === totalPages}
                  asChild={currentPage !== totalPages}
                >
                  {currentPage === totalPages ? (
                    <span className="cursor-not-allowed">
                      <ChevronRight className="h-4 w-4" />
                    </span>
                  ) : (
                    <Link href={`/articles?page=${currentPage + 1}`}>
                      <ChevronRight className="h-4 w-4" />
                      <span className="sr-only">Next page</span>
                    </Link>
                  )}
                </Button>
              </nav>
            )}

            {/* Page info */}
            <p className="text-muted-foreground mt-4 text-center text-sm">
              Showing {(currentPage - 1) * ARTICLES_PER_PAGE + 1}-
              {Math.min(currentPage * ARTICLES_PER_PAGE, sortedArticles.length)}{" "}
              of {sortedArticles.length} articles
            </p>
          </>
        ) : (
          <p className="text-muted-foreground mb-4">No articles created yet</p>
        )}
      </section>
    </section>
  );
}
