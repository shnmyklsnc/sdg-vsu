"use client";
import Image from "next/image";
import { SDGCardWithSkeleton } from "./sdg-card-with-skeleton";

export default function SDGList() {
  return (
    <section className="mb-5">
      <section className="bg-secondary dark:bg-primary relative overflow-hidden pt-42 pb-26">
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
        <h1 className="dark:text-secondary xs:text-5xl text-center text-2xl font-bold text-white">
          Sustainable Development Goals
        </h1>
      </section>
      <div className="bg-primary dark:bg-secondary mb-5 h-5 w-full" />

      <ul className="flex w-full flex-col items-center gap-4 px-4">
        {Array.from({ length: 17 }, (_, i) => i + 1).map(number => (
          <li key={number} className="w-full">
            <SDGCardWithSkeleton sdgId={number} />
          </li>
        ))}
      </ul>
    </section>
  );
}
