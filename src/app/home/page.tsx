import BrowseCategorySection from "./components/BrowseCategorySection";
import DiscoverSecrtion from "./components/DiscoverSection";
import HeroSection from "./components/HeroSection";
import HowItWorkSections from "./components/HowItWorkSections";
import TopCreatorsSections from "./components/TopCreatorsSections";
import TrendingSections from "./components/TrendingSections";

export default function Home() {
  return (
    <div className="flex py-10 px-10 md:px-20 items-center justify-center ">
      <div className="w-full flex flex-col xl:px-50 2xl:px-70">
        <HeroSection />
        <TrendingSections />
        <TopCreatorsSections />
        <BrowseCategorySection />
        <DiscoverSecrtion />
        <HowItWorkSections />
      </div>
    </div>
  );
}
