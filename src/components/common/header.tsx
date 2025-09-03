"use client";

import { navigationItems, sdgs } from "@/lib/data";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
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
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../ui/command";
import { useIsMobile } from "@/hooks/mobile";
import { Separator } from "../ui/separator";

export default function HeaderMobile() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useIsMobile();
  const [isCommandOpen, setIsCommandOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  const closeMenu = (): void => {
    setIsOpen(false);
  };

  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);

  const sdgsData = useMemo(
    () => (
      <>
        {sdgs.map(sdg => (
          <CommandItem
            role="link"
            key={sdg.id}
            onSelect={() => {
              router.push(`/sdgs/${sdg.id}`);
              setIsCommandOpen(false);
            }}
            className="cursor-pointer"
          >
            <Image
              src={`/sdgs/${sdg.id}.png`}
              alt={`${sdg.title} Icon`}
              width="20"
              height="20"
              className="h-auto w-auto object-cover"
            />
            SDG {sdg.id} - {sdg.title}
          </CommandItem>
        ))}
      </>
    ),
    [router]
  );

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const hash = window.location.hash.slice(1);

        if (hash) {
          setIsVisible(false);
        }

        // If scrolling down, hide the header
        if (window.scrollY > lastScrollY && window.scrollY > 100) {
          setIsVisible(false);
        }
        // If scrolling up, show the header
        else if (window.scrollY < lastScrollY) {
          setIsVisible(true);
        }

        // Update last scroll position
        setLastScrollY(window.scrollY);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", controlNavbar);

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        e.preventDefault();

        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return;
        }

        setIsCommandOpen(open => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  if (isMobile) {
    return (
      <header
        className={`bg-primary/90 dark:bg-secondary/90 fixed top-0 z-50 w-full overflow-hidden shadow-2xl backdrop-blur-md transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {/* Diamond Tiles Background with Fade */}
        <div
          className="absolute -top-22 -right-32 -z-1000 h-[160px] w-[250px]"
          style={{
            backgroundImage: 'url("/logo/Diamond Tiles.png")',
            backgroundSize: "250px",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, transparent 100%)",
          }}
        />
        <div
          className="absolute top-0 -left-32 -z-1000 h-full w-[250px]"
          style={{
            backgroundImage: 'url("/logo/Diamond Tiles.png")',
            backgroundSize: "250px",
            backgroundRepeat: "no-repeat",
            opacity: 0.1,
            maskImage:
              "radial-gradient(circle at center, black 0%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(circle at center, black 0%, transparent 100%)",
          }}
        />

        <div className="flex h-18 items-center justify-between px-5">
          {/* Logo - Left section */}
          <Link
            key="dark"
            className="hidden items-center gap-2 dark:flex"
            href="/"
          >
            <Image
              src="/logo/VSU Brand Logo.png"
              alt="Visayas State University Brand Logo"
              width={40}
              height={40}
              priority
              className="h-auto w-auto object-cover"
            />
            <Image
              src="/logo/VSU Text Logo.png"
              alt="Visayas State University Text Logo"
              width={110}
              height={110}
              priority
              className="h-auto w-auto object-cover"
            />
          </Link>
          <Link
            key="light"
            className="flex items-center gap-2 dark:hidden"
            href="/"
          >
            <Image
              src="/logo/VSU Brand Logo (White).png"
              alt="Visayas State University Brand Logo"
              width={40}
              height={40}
              priority
              className="h-auto w-auto object-cover"
            />
            <Image
              src="/logo/VSU Text Logo (White).png"
              alt="Visayas State University Text Logo"
              width={110}
              height={110}
              priority
              className="h-auto w-auto object-cover"
            />
          </Link>

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
              <SheetTrigger asChild>
                <Button
                  id="navigation-sheet"
                  aria-label="Toggle menu"
                  variant="ghost"
                  className="dark:text-primary text-white"
                >
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                aria-labelledby="navigation-sheet"
                side="right"
                className="bg-primary dark:bg-secondary dark:text-primary xs:w-72 w-63 border-none text-white"
              >
                <div className="absolute top-1/2 -right-62 -z-10 w-[180%] max-w-none -translate-y-1/2">
                  <Image
                    src="/logo/Wireframe Logo.png"
                    alt="Background wireframe"
                    width={1200}
                    height={600}
                    priority
                    className="h-auto w-auto object-cover opacity-10 brightness-50 filter dark:opacity-10 dark:brightness-900"
                  />
                  <div className="via-primary/60 to-primary dark:via-secondary/60 dark:to-secondary absolute inset-0 bg-gradient-to-r from-transparent from-10% via-40% to-70%" />
                </div>
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
                              pathname.split("/")[1].toLowerCase() ===
                                item.href.split("/")[1].toLowerCase() &&
                                "text-secondary underline dark:text-amber-700"
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
                            className="hidden h-auto w-auto object-cover dark:block"
                          />
                          <Image
                            src="/logo/VSU Brand Logo (White).png"
                            alt="Visayas State University Brand Logo"
                            width={24}
                            height={24}
                            priority
                            className="block h-auto w-auto object-cover dark:hidden"
                          />
                        </div>
                        <div className="dark:text-primary/70 text-sm text-white/70">
                          <Link
                            href="https://vsu.edu.ph"
                            className="dark:text-primary font-medium text-white"
                          >
                            Visayas State University
                          </Link>
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
              {sdgsData}
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </header>
    );
  } else {
    return (
      <header
        className={`bg-primary/90 dark:bg-secondary/90 fixed top-0 left-1/2 z-50 w-full -translate-x-1/2 overflow-hidden shadow-2xl backdrop-blur-md transition-all duration-300 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="lg:container">
          {/* Diamond Tiles Background with Fade */}
          <div
            className="absolute -top-22 -right-32 -z-1000 h-[160px] w-[250px]"
            style={{
              backgroundImage: 'url("/logo/Diamond Tiles.png")',
              backgroundSize: "250px",
              backgroundRepeat: "no-repeat",
              opacity: 0.1,
              maskImage:
                "radial-gradient(circle at center, black 0%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 0%, transparent 100%)",
            }}
          />
          <div
            className="absolute top-0 -left-32 -z-1000 h-full w-[250px]"
            style={{
              backgroundImage: 'url("/logo/Diamond Tiles.png")',
              backgroundSize: "250px",
              backgroundRepeat: "no-repeat",
              opacity: 0.1,
              maskImage:
                "radial-gradient(circle at center, black 0%, transparent 100%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 0%, transparent 100%)",
            }}
          />

          <div className="flex h-18 items-center justify-between px-5 lg:px-0">
            {/* Logo - Left section */}
            <div className="flex items-center gap-8">
              <Link
                key="dark"
                className="hidden items-center gap-2 dark:flex"
                href="/"
              >
                <Image
                  src="/logo/VSU Brand Logo.png"
                  alt="Visayas State University Brand Logo"
                  width={40}
                  height={40}
                  priority
                  className="h-auto w-auto object-cover"
                />
                <Image
                  src="/logo/VSU Text Logo.png"
                  alt="Visayas State University Text Logo"
                  width={110}
                  height={110}
                  priority
                  className="h-auto w-auto object-cover"
                />
              </Link>
              <Link
                key="light"
                className="flex items-center gap-2 dark:hidden"
                href="/"
              >
                <Image
                  src="/logo/VSU Brand Logo (White).png"
                  alt="Visayas State University Brand Logo"
                  width={40}
                  height={40}
                  priority
                  className="h-auto w-auto object-cover"
                />
                <Image
                  src="/logo/VSU Text Logo (White).png"
                  alt="Visayas State University Text Logo"
                  width={110}
                  height={110}
                  priority
                  className="h-auto w-auto object-cover"
                />
              </Link>
              <nav>
                <ul className="flex items-center">
                  {navigationItems.map(item => (
                    <li key={item.label}>
                      <Button
                        asChild
                        variant="link"
                        className={cn(
                          "dark:text-primary w-full justify-start text-white",
                          pathname.split("/")[1].toLowerCase() ===
                            item.href.split("/")[1].toLowerCase() &&
                            "text-secondary underline dark:text-amber-700"
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
            </div>

            <div className="flex h-full items-center gap-3">
              {/* Search Button */}
              <Button
                variant="outline"
                className="dark:text-primary/70 dark:hover:text-primary/60 relative h-8 w-full justify-start rounded-[0.5rem] text-sm font-normal text-white/30 hover:text-white/60 sm:pr-12 md:w-40 lg:w-56 xl:w-64"
                onClick={() => setIsCommandOpen(true)}
              >
                <span className="hidden lg:inline-flex">
                  Search documents...
                </span>
                <span className="inline-flex lg:hidden">Search...</span>
                <kbd className="pointer-events-none absolute top-[0.3rem] right-[0.3rem] hidden h-5 items-center gap-1 rounded border border-green-900/80 bg-green-900/80 px-1.5 font-mono text-[10px] font-medium text-white/60 opacity-100 select-none sm:flex dark:border-yellow-600/80 dark:bg-yellow-600/80 dark:text-white/80">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </Button>
              <div className="flex h-3 items-center">
                <Separator
                  orientation="vertical"
                  className="dark:bg-primary/50 bg-white"
                />

                <AnimatedThemeToggler className="flex w-full items-center gap-4 px-2 py-3 text-sm font-medium capitalize" />
              </div>
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
                {sdgsData}
              </CommandGroup>
            </CommandList>
          </CommandDialog>
        </div>
      </header>
    );
  }
}
