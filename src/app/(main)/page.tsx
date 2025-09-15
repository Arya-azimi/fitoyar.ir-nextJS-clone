import { HeroSection } from "@/components/home-components/hero";
import { HomeFeatures } from "@/components/home-components/home-features";
import { LatestArticles } from "@/components/home-components/latest-articles";
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
