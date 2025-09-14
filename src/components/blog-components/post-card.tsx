import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/lib/sanity";
import { Post } from "@/domain/types";

interface Props {
  post: Post;
}

export default function PostCard({ post }: Props) {
  if (!post.slug) {
    return null;
  }

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden  rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-2xl "
    >
      <article className="relative">
        <div className="relative h-56 w-full overflow-hidden">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={`Cover image for ${post.title}`}
            fill
            className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col bg-white p-5">
          <h2 className="text-xl leading-tight font-bold text-gray-800 transition-colors duration-200 group-hover:text-blue-950 dark:group-hover:text-blue-400">
            {post.title}
          </h2>

          <div className="mt-4 flex items-center space-x-3">
            {post.author.picture && (
              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={urlFor(post.author.picture).url()}
                  alt={`Picture of ${post.author.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div>
              <p className="text-sm font-semibold text-black">
                {post.author.name}
              </p>
              <p className="text-xs text-black">
                {new Date(post.publishedAt).toLocaleDateString("fa-IR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
}
