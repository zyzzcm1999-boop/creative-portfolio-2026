import { categories } from "./data";

export const categoryBySlug = new Set(categories.map((category) => category.slug));
