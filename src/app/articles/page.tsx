import ArticlesList from "@/components/articles/articles-list";
import { Metadata } from "next";
import z from "zod";

const articlesParamsSchema = z.object({
  page: z.coerce.number().int().optional(),
});

export const metadata: Metadata = {
  title: "Articles | Visayas State University - Sustainable Development Goals",
  description:
    "Explore the latest news and updates about the Visayas State University.",
};

export default async function ArticlesPage({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) {
  const result = articlesParamsSchema.safeParse(await searchParams);

  if (!result.success) {
    return <ArticlesList page={1} />;
  }

  const { page } = result.data;

  return <ArticlesList page={page} />;
}
