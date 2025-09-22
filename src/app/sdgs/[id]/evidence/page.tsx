"use server";

import EvidenceView from "@/components/evidence/evidence-view";
import { Metadata } from "next";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    metric: string;
    indicator?: string;
    year: string;
    file: string;
  }>;
}): Promise<Metadata> {
  const paramsData = await params;
  const searchParamsData = await searchParams;

  return {
    title: {
      absolute: `Evidence for SDG ${paramsData.id} - Metric ${searchParamsData.metric} ${
        searchParamsData.indicator
          ? `- Indicator ${searchParamsData.indicator}`
          : ""
      } (${searchParamsData.year})`,
    },
    description:
      "Public document evidence of the Visayas State University for the Times Higher Education Impact Rankings.",
  };
}

export default async function EvidencePage({
  searchParams,
}: {
  searchParams: Promise<{
    metric: string;
    indicator?: string;
    year: string;
    file: string;
  }>;
}) {
  const { metric, indicator, year, file } = await searchParams;

  return (
    <EvidenceView
      metric={metric}
      indicator={indicator}
      year={year}
      file={file}
    />
  );
}
