"use client";

import Image from "next/image";
import { ReactNode, useEffect, useRef, useState } from "react";

export default function PageTitle({ title }: { title: ReactNode }) {
  const [scrollY, setScrollY] = useState(0);
  const imageRef = useRef<HTMLDivElement>(null);

  // Track scroll position for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Initial call to set position
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate parallax effect based on scroll position
  // The divisor controls how fast the parallax moves (higher = slower)
  const yOffset = scrollY / 3;

  return (
    <>
      <section className="bg-secondary dark:bg-primary relative flex h-[300px] overflow-hidden sm:h-[350px] md:h-[350px] lg:h-[450px]">
        <div className="relative z-10 container mx-auto flex h-full w-full items-center justify-center px-4 pt-18">
          <h1 className="dark:text-secondary xs:text-3xl line-clamp-2 max-w-3xl text-center text-2xl font-bold text-white sm:text-5xl lg:text-6xl">
            {title}
          </h1>
        </div>

        <div
          ref={imageRef}
          className="xs:-bottom-12 absolute bottom-0 left-1/2 aspect-[2/1] w-full max-w-2xl -translate-x-1/2 translate-y-1/3 will-change-transform sm:-bottom-44 md:-bottom-61 md:max-w-3xl lg:-bottom-36"
          style={{
            transform: `translate(0, ${yOffset}px)`,
            transition: "transform 0.1s cubic-bezier(0.33, 1, 0.68, 1)",
          }}
        >
          <Image
            src="/logo/Wireframe Logo.png"
            alt="Background wireframe"
            width={1200}
            height={600}
            priority
            style={{ width: "auto", height: "auto" }}
            className="object-contain object-center opacity-10 brightness-900 filter dark:opacity-5 dark:brightness-50"
          />
        </div>

        <div className="to-secondary dark:to-primary absolute inset-0 bg-gradient-to-b from-transparent from-20% via-transparent via-70% to-100%" />
      </section>
      <div className="bg-primary dark:bg-secondary mb-5 h-5 w-full" />
    </>
  );
}
