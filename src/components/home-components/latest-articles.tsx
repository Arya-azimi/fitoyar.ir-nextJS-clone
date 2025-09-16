"use client";

import { Post } from "@/domain/types";
import PostCard from "../blog-components/post-card";
import { SectionTitle } from "../ui/section-title";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

type Props = {
  posts: Post[];
};

export function LatestArticles({ posts }: Props) {
  return (
    <main className="mt-12">
      <SectionTitle>آخرین مقالات</SectionTitle>
      <section className="max-w-6xl mx-auto p-4">
        <Swiper
          modules={[Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="!pb-12"
        >
          {posts.map((post) => (
            <SwiperSlide key={post._id}>
              <PostCard post={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
}
