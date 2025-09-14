import type { Image as SanityImage } from "sanity";
import type { PortableTextBlock } from "@portabletext/types";

export interface Author {
  _type: "author";
  name: string;
  picture: SanityImage;
}

export interface Category {
  _type: "category";
  _id: string;
  title: string;
  parent?: { _id: string; title: string };
  children?: Category[];
}

export interface Post {
  _type: "post";
  _id: string;
  _createdAt: string;

  title: string;
  slug: string;
  mainImage: SanityImage;
  author: Author;
  publishedAt: string;
  body: PortableTextBlock[];
}
