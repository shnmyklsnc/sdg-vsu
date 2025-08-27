import { Article } from "@/lib/types";
import { Calendar, ImageOff, UserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ArticleCard({ article }: { article: Article }) {
  return (
    <Link
      href={article.href}
      className="group bg-card relative block rounded-sm border-1"
    >
      <div className="flex flex-col">
        {article.thumbnail && (
          <div className="relative h-48 w-full overflow-hidden rounded-t-sm">
            <Image
              src={article.thumbnail}
              alt={article.title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}
        {!article.thumbnail && (
          <div className="text-muted-foreground flex h-48 w-full items-center justify-center overflow-hidden rounded-t-sm border-b-1">
            <ImageOff />
          </div>
        )}

        <div className="flex flex-col gap-2 p-6">
          <h3 className="text-primary dark:text-secondary xs:text-xl line-clamp-3 min-h-[5rem] text-base font-semibold underline-offset-4 group-hover:underline">
            {article.title}
          </h3>
          <p className="text-foreground mb-1 line-clamp-3 text-justify text-sm">
            {article.description}
          </p>
          <div className="text-muted-foreground flex items-center justify-between gap-2 text-xs font-medium">
            <div className="flex gap-2 overflow-hidden">
              <UserRound className="h-4 w-4 flex-shrink-0" />
              <p className="truncate overflow-hidden whitespace-nowrap">
                {article.author}
              </p>
            </div>
            <div className="flex gap-2">
              <Calendar className="h-4 w-4" />
              <time className="block whitespace-nowrap">
                {article.datePublished === "No Date"
                  ? "No Date"
                  : article.datePublished.toLocaleDateString("en-PH", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                    })}
              </time>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
