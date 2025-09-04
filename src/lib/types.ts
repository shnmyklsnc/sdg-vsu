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

export interface Submission {
  id: number;
  name: string;
  filename: string;
  url?: string;
  relatedSdgs: SDG["id"][];
  metric: Metric["id"] | Metric["id"][];
  indicator?: Indicator["id"] | Indicator["id"][];
  date: Date | "No Date";
  impactRankingsYear: ImpactRankingsYear["id"];
}

export interface GroupedSubmissions {
  direct: Submission[];
  byIndicator: Record<
    string,
    {
      indicator: Indicator;
      submissions: Submission[];
    }
  >;
}

export interface MetricSubmissions {
  metric: Metric;
  submissions: GroupedSubmissions;
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
