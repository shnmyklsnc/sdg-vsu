"use client";

import Image from "next/image";
import { Highlighter } from "../../magicui/highlighter";
import { useTheme } from "next-themes";
import { Marquee } from "../../magicui/marquee";
import { sdgs } from "@/lib/data";
import SDGCard from "./sdg-card-marquee";
import { LinkPreview } from "@/components/ui/link-preview";

const firstRow = sdgs.slice(0, sdgs.length / 2);
const secondRow = sdgs.slice(sdgs.length / 2);

export default function HeroSection() {
  const { theme } = useTheme();

  return (
    <section className="relative h-[100vh] overflow-hidden transition-all duration-300 lg:container lg:h-[60vh]">
      {/* Base Image */}
      <Image
        src="/images/vsu-admin-drone-view.jpg"
        alt="Visayas State University Admin Building with Mountain View"
        fill
        quality={90}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1024px"
        className="-z-1000 object-cover brightness-50"
        priority
      />

      {/* Gradient Fade Overlay */}
      <div className="from-secondary via-secondary dark:from-primary dark:via-primary absolute inset-0 -z-999 bg-gradient-to-b from-0% via-18% to-transparent to-60%" />

      <div className="flex h-full flex-col justify-between lg:grid lg:grid-cols-[1fr_0.3fr]">
        <div className="mt-32 flex flex-col items-center justify-center px-4 text-center">
          <h1
            className="text-primary dark:text-secondary xs:text-4xl mb-3 text-3xl font-bold tracking-tight drop-shadow-[0_3px_10px_rgba(255,255,255,1)] md:text-6xl dark:drop-shadow-[0_3px_10px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "Galada" }}
          >
            Sustainable Development
          </h1>

          <LinkPreview
            url="/sdgs"
            isStatic
            imageSrc="/images/vsu-lower-pathway.jpg"
          >
            <div
              className="flex items-center justify-center"
              aria-label="Goals"
            >
              <Highlighter
                action="box"
                color={theme === "light" ? "#146939" : "#FDC530"}
              >
                <div className="flex items-center px-2">
                  <span className="xs:text-8xl text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] md:text-[12rem]">
                    G
                  </span>
                  <div className="relative mx-1 p-1">
                    <Image
                      src="/sdgs/wheel.png"
                      alt="Sustainable Development Goals Wheel Icon"
                      width="100"
                      height="100"
                      className="xs:h-[85px] xs:w-[85px] h-[60px] w-[60px] object-cover drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] md:h-[140px] md:w-[140px]"
                      priority
                    />
                  </div>
                  <span className="xs:text-8xl text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] md:text-[12rem]">
                    ALS
                  </span>
                </div>
              </Highlighter>
            </div>
          </LinkPreview>
        </div>

        {/* Marquee section with fixed height */}
        <div
          className="mb-2 w-full overflow-hidden lg:hidden"
          key="Marquee Mobile"
          role="marquee"
        >
          <Marquee pauseOnHover className="[--duration:20s]" repeat={5}>
            {firstRow.map(sdg => (
              <SDGCard key={sdg.id} sdg={sdg} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]" repeat={5}>
            {secondRow.map(sdg => (
              <SDGCard key={sdg.id} sdg={sdg} />
            ))}
          </Marquee>
        </div>
        <div
          className="hidden w-full overflow-hidden lg:flex"
          key="Marquee Desktop"
          role="marquee"
        >
          <Marquee
            pauseOnHover
            vertical
            className="[--duration:20s]"
            repeat={5}
          >
            {firstRow.map(sdg => (
              <SDGCard key={sdg.id} sdg={sdg} size={140} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            vertical
            className="[--duration:20s]"
            repeat={5}
          >
            {secondRow.map(sdg => (
              <SDGCard key={sdg.id} sdg={sdg} size={140} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
