"use server";

import SingleSDGView from "@/components/sdgs/single-sdg-view";
import { sdgs } from "@/lib/data";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import z from "zod";

const singleSDGParamsSchema = z.object({
  id: z.coerce.number(),
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const result = singleSDGParamsSchema.safeParse(await params);

  if (!result.success) {
    return notFound();
  }

  const { id } = result.data;

  if (id < 1 || id > 17) {
    return notFound();
  }

  // Get the SDG information
  const sdg = sdgs.find(s => s.id === id)!;

  return {
    title: sdg.title,
    description: sdg.description,
  };
}

export default async function SingleSDGPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const result = singleSDGParamsSchema.safeParse(await params);

  if (!result.success) {
    return notFound();
  }

  const { id } = result.data;

  if (id < 1 || id > 17) {
    return notFound();
  }

  return <SingleSDGView id={id} />;
}
