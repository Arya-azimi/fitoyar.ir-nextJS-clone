import { client } from "./sanity";
import { Post, Category } from "@/domain";
import { groq } from "next-sanity";

const postFields = groq`
  _id,
  title,
  "slug": slug.current,
  mainImage,
  publishedAt,
  "author": author->{name, picture}
`;
export async function getAllPosts(): Promise<Post[]> {
  const posts = await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc) {
      ${postFields}
    }`
  );
  return posts;
}

export async function getPostBySlug(slug: string): Promise<Post> {
  const post = await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      mainImage,
      body,
      publishedAt,
      "author": author->{name, picture}
    }`,
    { slug }
  );
  return post;
}

export async function getLatestPosts(): Promise<Post[]> {
  const posts = await client.fetch(
    groq`*[_type == "post"] | order(publishedAt desc)[0...3] {
      _id,
      title,
      "slug": slug.current,
      mainImage,
      publishedAt,
      "author": author->{name, picture}
    }`
  );
  return posts;
}

export async function getAllCategories(): Promise<Category[]> {
  return client.fetch(groq`*[_type == "category"] | order(title asc)`);
}

export async function getFilteredPosts(
  category: string = "all",
  sortBy: string = "desc"
): Promise<Post[]> {
  let query = `*[_type == "post"`;
  let params = {};

  if (category !== "all") {
    query += ` && $category in categories[]->title`;
    params = { ...params, category };
  }

  query += `] | order(publishedAt ${sortBy}) {
        _id,
        title,
        "slug": slug.current,
        mainImage,
        publishedAt,
        "author": author->{name, picture},
        "categories": categories[]->{_id, title}
    }`;

  return client.fetch(query, params);
}
