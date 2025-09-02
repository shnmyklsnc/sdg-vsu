import { ArcTimelineItem } from "@/components/magicui/arc-timeline";
import { LucideIcon } from "lucide-react";

export interface SDG {
  id: number;
  title: string;
  description: string;
  image: string;
  metrics: Metric[];
  color: string;
  overview: string | React.ReactNode;
}

export interface SDGCardWithShimmerProps {
  sdgId: number;
  href?: string;
}

export interface ImpactRankingsYear {
  id: number;
  year: number; // new Date().getFullYear()
}

export interface Document {
  id: number;
  name: string;
  relatedSdgs: SDG["id"][];
  metric: Metric["id"] | Metric["id"][];
  indicator?: Indicator["id"] | Indicator["id"][];
  date: Date | "No Date";
  impactRankingsYear: ImpactRankingsYear['id'];
}

export interface GroupedDocuments {
  direct: Document[];
  byIndicator: Record<
    string,
    {
      indicator: Indicator;
      documents: Document[];
    }
  >;
}

export interface MetricDocuments {
  metric: Metric;
  documents: GroupedDocuments;
}

export interface Metric {
  id: string;
  name: string;
  indicators: Indicator[];
  impactRankingsYear: ImpactRankingsYear["id"];
}

export interface Indicator {
  id: string;
  name: string;
  dataSource: "bibliometric" | "portal" | "evidence";
}

export interface Article {
  title: string;
  description: string;
  href: string;
  author: string;
  datePublished: Date | "No Date";
  relatedSdgs: SDG["id"][];
  metric?: Metric["name"] | Metric["name"][];
  indicator?: string | string[];
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
