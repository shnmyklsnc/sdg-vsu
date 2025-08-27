import { ArcTimelineItem } from "@/components/magicui/arc-timeline";
import { LucideIcon } from "lucide-react";

export interface SDG {
  id: number;
  title: string;
  description: string;
  image: string;
  targets: Target[];
  color: string;
  overview: string | React.ReactNode;
}

export interface Document {
  id: number;
  name: string;
  relatedSdgs: SDG["id"][];
  target: Target["name"] | Target["name"][];
  indicator?: string | string[];
  date: Date | "No Date";
}

export interface GroupedDocuments {
  direct: Document[];
  byIndicator: Record<
    string,
    {
      mainDocs: Document[];
      subgroups: Record<string, Document[]>;
    }
  >;
}

export interface TargetDocuments {
  target: {
    name: string;
    description: string;
  };
  documents: GroupedDocuments;
}

export interface Target {
  name: string;
  description: string;
}

export interface Article {
  title: string;
  description: string;
  href: string;
  author: string;
  datePublished: Date | "No Date";
  relatedSdgs: SDG["id"][];
  thumbnail?: string;
}

export interface SDGTimeline {
  relatedSdg: SDG["id"];
  timeline: ArcTimelineItem[];
}

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}
