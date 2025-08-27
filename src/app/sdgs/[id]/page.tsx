"use server";

import SingleSDGView from "@/components/sdgs/single-sdg-view";
import { notFound } from "next/navigation";
import z from "zod";

const singleSDGParamsSchema = z.object({
  id: z.coerce.number(),
});

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
