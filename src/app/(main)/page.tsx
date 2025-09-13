import { HeroSection } from "@/components/hero/hero";
import { HomeFeatures } from "@/components/home-features/home-features";
import { LatestArticles } from "@/components/latest-articles/latest-articles";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeFeatures />
      <LatestArticles />
    </>
  );
}
