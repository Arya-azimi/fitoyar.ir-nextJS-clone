import { groq } from "next-sanity";
import { client } from "./sanity";
import type { Post, Category } from "@/domain/types";

const postFields = groq`
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  "author": author->{name, picture},
  "categories": categories[]->{_id, title}
`;

export async function getFilteredPosts(
  category: string = "all",
  sortBy: string = "desc",
  searchQuery: string = ""
): Promise<Post[]> {
  let query = `*[_type == "post"`;
  let params: { [key: string]: any } = {};

  if (category !== "all") {
    query += ` && $category in categories[]->title`;
    params = { ...params, category };
  }

  if (searchQuery) {
    query += ` && (title match $searchQuery || pt::text(body) match $searchQuery)`;
    params = { ...params, searchQuery: `*${searchQuery}*` };
  }

  query += `] | order(publishedAt ${sortBy}) {
    ${postFields}
  }`;

  return client.fetch(query, params);
}

export async function getLatestPosts(): Promise<Post[]> {
  return client.fetch(groq`*[_type == "post"] | order(publishedAt desc)[0...3] {
    ${postFields}
  }`);
}

export async function getPostBySlug(slug: string): Promise<Post> {
  return client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      ${postFields},
      body
    }`,
    { slug }
  );
}

export async function getAllCategories(): Promise<Category[]> {
  return client.fetch(groq`*[_type == "category"] | order(title asc)`);
}

export async function getCategoriesWithHierarchy(): Promise<Category[]> {
  return client.fetch(groq`
    *[_type == "category"]{
      _id,
      title,
      "parent": parent->{_id, title}
    }
  `);
}

export async function getRecentPosts(limit: number = 6): Promise<Post[]> {
  return client.fetch(groq`*[_type == "post"] | order(publishedAt desc)[0...${limit}] {
    ${postFields}
  }`);
}
