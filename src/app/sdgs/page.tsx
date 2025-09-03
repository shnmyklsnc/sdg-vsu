import SDGList from "@/components/sdgs/sdgs-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sustainable Development Goals | Visayas State University",
  description: "Sustainable development goals of the Visayas State University.",
};

export default function SDGSPage() {
  return <SDGList />;
}
