"use client";

import { navigationItems } from "@/lib/data";
import Image from "next/image";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { Button } from "../ui/button";
import { AnimatedThemeToggler } from "../magicui/animated-theme-toggler";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  return (
    <header className="bg-primary/90 dark:bg-secondary/90 fixed top-0 z-50 w-full shadow-md backdrop-blur-md transition-all duration-300">
      <div className="flex h-18 items-center justify-between px-5">
        {/* Logo - Left section */}
        <div className="flex items-center gap-2">
          <div
            className="hidden items-center gap-2 dark:flex"
            aria-label="Visayas State University Logo"
          >
            <Image
              src="/logo/VSU Brand Logo.png"
              alt="Visayas State University Brand Logo"
              width={40}
              height={40}
              priority
            />
            <Image
              src="/logo/VSU Text Logo.png"
              alt="Visayas State University Text Logo"
              width={110}
              height={110}
              priority
            />
          </div>
          <div
            className="flex items-center gap-2 dark:hidden"
            aria-label="Visayas State University Logo"
          >
            <Image
              src="/logo/VSU Brand Logo (White).png"
              alt="Visayas State University Brand Logo"
              width={40}
              height={40}
              priority
            />
            <Image
              src="/logo/VSU Text Logo (White).png"
              alt="Visayas State University Text Logo"
              width={110}
              height={110}
              priority
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Search Button */}
          <Button
            variant="ghost"
            className="dark:text-primary text-white"
            onClick={() => setIsCommandOpen(true)}
          >
            <Search />
          </Button>

          {/* Hamburger Menu Button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="dark:text-primary text-white">
              <Menu />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="bg-primary dark:bg-secondary dark:text-primary w-72 border-none text-white"
            >
              <Image
                src="/logo/Wireframe Logo.png"
                alt="Background wireframe"
                width={1200}
                height={600}
                priority
                className="absolute top-1/2 -right-62 -z-10 w-[180%] max-w-none -translate-y-1/2 opacity-10 brightness-300 filter dark:opacity-5 dark:brightness-100"
              />
              <SheetHeader>
                <SheetTitle className="dark:text-primary text-white">
                  Explore Our SDGs
                </SheetTitle>
              </SheetHeader>
              <div className="flex h-full flex-col justify-between px-4">
                <nav className="flex-1">
                  <ul className="space-y-6">
                    {navigationItems.map(item => (
                      <li key={item.label}>
                        <Button
                          asChild
                          variant="link"
                          className={cn(
                            "dark:text-primary w-full justify-start text-white",
                            pathname === item.href &&
                              "text-secondary underline dark:text-amber-100"
                          )}
                        >
                          <Link href={item.href} onClick={closeMenu}>
                            <item.icon className="mr-2 h-4 w-4" />
                            <span className="relative">{item.label}</span>
                          </Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </nav>

                <div className="mb-4">
                  <AnimatedThemeToggler className="flex w-full items-center gap-4 px-2 py-3 text-sm font-medium capitalize" />
                  <div className="dark:border-primary/20 border-t border-white/10 pt-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-10 w-10 items-center justify-center">
                        <Image
                          src="/logo/VSU Brand Logo.png"
                          alt="Visayas State University Brand Logo"
                          width={24}
                          height={24}
                          priority
                          className="hidden dark:block"
                        />
                        <Image
                          src="/logo/VSU Brand Logo (White).png"
                          alt="Visayas State University Brand Logo"
                          width={24}
                          height={24}
                          priority
                          className="block dark:hidden"
                        />
                      </div>
                      <div className="dark:text-primary/70 text-sm text-white/70">
                        <div className="dark:text-primary font-medium text-white">
                          Visayas State University
                        </div>
                        <div className="text-xs">
                          Sustainable Development Goals
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <CommandDialog
        open={isCommandOpen}
        onOpenChange={setIsCommandOpen}
        showCloseButton
      >
        <CommandInput placeholder="Search" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Sustainable Development Goals">
            <CommandItem>
              <Image
                src="/sdgs/1.png"
                alt="No Poverty Icon"
                width="20"
                height="20"
              />
              No Poverty
            </CommandItem>
            <CommandItem>
              <Image
                src="/sdgs/2.png"
                alt="Zero Hunger Icon"
                width="20"
                height="20"
              />
              Zero Hunger
            </CommandItem>
            <CommandItem>
              <Image
                src="/sdgs/3.png"
                alt="Good Health and Well-Being Icon"
                width="20"
                height="20"
              />
              Good Health and Well-Being
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </header>
  );
}
