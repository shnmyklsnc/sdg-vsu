"use client";

import { useEffect, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { cn } from "@/lib/utils";
import { Label } from "../ui/label";
import { useTheme } from "next-themes";
import { useIsMobile } from "@/hooks/mobile";

type props = {
  className?: string;
};

export const AnimatedThemeToggler = ({ className }: props) => {
  const isMobile = useIsMobile();
  const { resolvedTheme, setTheme } = useTheme();
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeTheme = async () => {
    if (!buttonRef.current) return;

    await document.startViewTransition(() => {
      flushSync(() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light");
        document.documentElement.classList.toggle("dark");
      });
    }).ready;

    const { top, left, width, height } =
      buttonRef.current.getBoundingClientRect();
    const y = top + height / 2;
    const x = left + width / 2;

    const right = window.innerWidth - left;
    const bottom = window.innerHeight - top;
    const maxRad = Math.hypot(Math.max(left, right), Math.max(top, bottom));

    document.documentElement.animate(
      {
        clipPath: [
          `circle(0px at ${x}px ${y}px)`,
          `circle(${maxRad}px at ${x}px ${y}px)`,
        ],
      },
      {
        duration: 700,
        easing: "ease-in-out",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  };

  return (
    <button
      ref={buttonRef}
      onClick={changeTheme}
      className={cn(className, "group cursor-pointer")}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="dark:text-primary group-hover:text-secondary size-4.5 text-white transition-colors dark:group-hover:text-amber-700"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
        <path d="M12 3l0 18" />
        <path d="M12 9l4.65 -4.65" />
        <path d="M12 14.3l7.37 -7.37" />
        <path d="M12 19.6l8.85 -8.85" />
      </svg>
      {!isMobile ? null : (
        <div className="dark:text-primary/70 group-hover:text-secondary flex flex-col text-left text-xs text-white transition-colors dark:group-hover:text-amber-700">
          {mounted ? `${resolvedTheme} Mode` : null}
          <Label className="dark:text-primary/70 cursor-pointer text-xs text-white/70">
            Toggle color theme
          </Label>
        </div>
      )}
    </button>
  );
};
