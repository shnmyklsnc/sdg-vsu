"use client";
import PageTitle from "../common/page-title";
import { SDGCardWithSkeleton } from "./sdg-card-with-skeleton";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function SDGList() {
  return (
    <section className="mb-5 transition-all duration-300 lg:container">
      <PageTitle title="Sustainable Development Goals" />

      <ul className="xs:grid-cols-2 grid grid-cols-1 items-center gap-2 px-2 sm:grid-cols-3 lg:px-0">
        {Array.from({ length: 17 }, (_, i) => i + 1).map(number => (
          <li key={number} className="w-full">
            <SDGCardWithSkeleton sdgId={number} />
          </li>
        ))}
        <li role="none" className="w-full">
          <div
            className={cn(
              "relative aspect-square w-full overflow-hidden rounded-md",
              "bg-[oklch(0.8883_0.0042_91.45)] dark:bg-[oklch(0.2621_0.0095_248.19)]",
              "transition-all duration-500",
              // Light mode neumorphic effect - subtle extrusion
              "shadow-[4px_4px_10px_rgba(0,0,0,0.1),-4px_-4px_10px_rgba(255,255,255,0.8)]",
              // Dark mode neumorphic effect - adapted for dark background
              "dark:shadow-[4px_4px_10px_rgba(0,0,0,0.3),-4px_-4px_10px_rgba(78,78,110,0.15)]"
            )}
          >
            {/* Image */}
            <Image
              src="/sdgs/sdg.png"
              alt="SDG"
              fill
              className="h-auto w-auto object-contain p-4"
            />
          </div>
        </li>
      </ul>
    </section>
  );
}
