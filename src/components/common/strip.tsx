import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const stripVariants = cva("w-full", {
  variants: {
    variant: {
      default: "mb-5 h-12 lg:h-24 w-full bg-neutral-700",
      secondary: "h-4 w-full bg-primary dark:bg-secondary",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export default function Strip({
  className,
  variant,
  ...props
}: React.ComponentProps<"div"> & VariantProps<typeof stripVariants>) {
  return (
    <div className={cn(stripVariants({ variant, className }))} {...props} />
  );
}
