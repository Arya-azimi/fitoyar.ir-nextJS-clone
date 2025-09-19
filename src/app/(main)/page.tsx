import { HeroSection } from "@/components/home/hero";
import { HomeFeatures } from "@/components/home/home-features";
import { LatestArticles } from "@/components/home/latest-articles";
import { getRecentPosts } from "@/lib/queries";

export default async function Home() {
  const recentPosts = await getRecentPosts(6); // برای مثال ۶ مقاله آخر
  return (
    <>
      <HeroSection />
      <HomeFeatures />
      <LatestArticles posts={recentPosts} />{" "}
    </>
  );
}
