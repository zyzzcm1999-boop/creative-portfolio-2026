import { redirect } from "next/navigation";
import { categoryBySlug } from "../redirect-data";

export default async function LegacyCategory({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  redirect(categoryBySlug.has(slug) ? `/#${slug}` : "/");
}
