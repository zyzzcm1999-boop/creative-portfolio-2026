import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CategoryPage } from "../components";
import { categories, categoryBySlug } from "../data";

export function generateStaticParams() {
  return categories.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryBySlug[slug];
  if (!category) return {};
  return {
    title: `${category.title}｜创意作品集`,
    description: category.intro,
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = categoryBySlug[slug];
  if (!category) notFound();
  return <CategoryPage category={category} />;
}
