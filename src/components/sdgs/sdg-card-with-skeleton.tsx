"use client";

import { SDGCardWithShimmerProps } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SDGCardWithSkeleton({ sdgId, href }: SDGCardWithShimmerProps) {
  const [isLoading, setIsLoading] = useState(true);

  const mainImageUrl = `/sdgs/cta/${sdgId}.jpg`;
  const hoverImageUrl = `/sdgs/lang-gif/${sdgId}.gif`;

  useEffect(() => {
    const img1 = new Image();
    const img2 = new Image();
    let loadedCount = 0;

    const checkAllLoaded = () => {
      loadedCount++;
      if (loadedCount === 2) {
        setIsLoading(false);
      }
    };

    img1.onload = checkAllLoaded;
    img2.onload = checkAllLoaded;
    img1.onerror = checkAllLoaded;
    img2.onerror = checkAllLoaded;

    img1.src = mainImageUrl;
    img2.src = hoverImageUrl;
  }, [mainImageUrl, hoverImageUrl]);

  if (isLoading) {
    return (
      <div className="group relative">
        <div className="card relative mx-auto flex aspect-square animate-pulse flex-col justify-end overflow-hidden rounded-md border border-transparent bg-gray-300 p-4 shadow-xl dark:border-neutral-800 dark:bg-gray-700">
          <div className="absolute inset-0 bg-gradient-to-t from-gray-400/50 to-transparent dark:from-gray-600/50" />
        </div>
      </div>
    );
  }

  return (
    <Link href={href || `/sdgs/${sdgId}`}>
      <div
        className={cn(
          "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
          "bg-cover bg-center object-center",
          "transition-all duration-500",
          "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']"
        )}
        style={{
          backgroundImage: `url("${mainImageUrl}")`,
        }}
        onMouseEnter={e => {
          e.currentTarget.style.backgroundImage = `url("${hoverImageUrl}")`;
        }}
        onMouseLeave={e => {
          e.currentTarget.style.backgroundImage = `url("${mainImageUrl}")`;
        }}
      >
        {/* Preload hover image */}
        <div
          className="pointer-events-none fixed inset-0 z-[-1] opacity-0"
          style={{ backgroundImage: `url("${hoverImageUrl}")` }}
        />
      </div>
    </Link>
  );
}
