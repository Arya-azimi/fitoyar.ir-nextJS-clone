import { HeroSection } from "@/components/home-components/hero";
import { HomeFeatures } from "@/components/home-components/home-features";
import { LatestArticles } from "@/components/home-components/latest-articles";

export default function Home() {
  return (
    <>
      <HeroSection />
      <HomeFeatures />
      <LatestArticles />
    </>
  );
}
