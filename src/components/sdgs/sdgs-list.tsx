"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";

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
            className="opacity-10 brightness-900 filter dark:opacity-5 dark:brightness-50"
          />
          <div className="to-secondary dark:to-primary absolute inset-0 bg-gradient-to-b from-transparent from-10% via-transparent via-40% to-70%" />
        </div>
        <h1 className="dark:text-secondary xs:text-5xl text-center text-2xl font-bold text-white">
          Sustainable Development Goals
        </h1>
      </section>
      <div className="bg-primary dark:bg-secondary mb-5 h-5 w-full" />

      <ul className="flex w-full flex-col items-center gap-4 px-4">
        <li className="w-full">
          <Link href="/sdgs/1">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/1.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/1.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/1.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/2">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/2.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/2.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/2.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/3">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/3.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/3.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/3.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/4">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/4.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/4.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/4.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/5">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/5.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/5.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/5.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/6">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/6.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/6.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/6.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/7">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/7.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/7.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/7.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/8">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/8.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/8.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/8.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/9">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/9.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/9.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/9.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/10">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/10.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/10.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/10.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/11">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/11.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/11.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/11.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/12">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/12.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/12.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/12.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/13">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/13.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/13.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/13.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/14">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/14.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/14.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/14.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/15">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/15.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/15.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/15.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/16">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/16.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/16.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/16.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
        <li className="w-full">
          <Link href="/sdgs/17">
            <div
              className={cn(
                "group card relative mx-auto flex aspect-square cursor-pointer flex-col justify-end overflow-hidden rounded-md border border-transparent p-4 shadow-xl dark:border-neutral-800",
                'bg-[url("/sdgs/cta/17.jpg")] bg-cover bg-center object-center',
                // Preload hover image by setting it in a pseudo-element
                "before:fixed before:inset-0 before:z-[-1] before:bg-[url('/sdgs/lang-gif/17.gif')] before:opacity-0",
                "hover:bg-[url('/sdgs/lang-gif/17.gif')]",
                "hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50 hover:after:content-['']",
                "transition-all duration-500"
              )}
            />
          </Link>
        </li>
      </ul>
    </section>
  );
}
