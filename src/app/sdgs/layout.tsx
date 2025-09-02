import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "%s | Visayas State University",
    default: "Visayas State University - Sustainable Development Goals",
  },
};

export default function SDGLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
