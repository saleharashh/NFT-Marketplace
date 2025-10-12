import NFTCard from "@/app/components/NFTCard";
import HeroStaticsItem from "./HeroStaticsItem";
import NFTCardLoadingSkeleton from "@/app/components/NFTCardLoadingSkeleton";

const HomeLoadingStatItemSkeleton = () => {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold text-secondary-background bg-secondary-background rounded-xl">
        Following
      </p>
      <p className="text-sm text-secondary-background bg-secondary-background rounded-xl">
        Following
      </p>
    </div>
  );
};

const HomeLoadingSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col w-full  md:flex-row md:justify-between gap-5 ">
          <div className="flex flex-col md:w-7/12 md:items-center md:justify-center gap-4">
            <h4 className="text-2xl md:text-4xl xl:text-6xl text-secondary-background bg-secondary rounded-2xl">
              Discover Digital Art & Collect NFTs
            </h4>
            <h1 className="md:text-sm text-secondary-background bg-secondary rounded-2xl">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </h1>
            <div className="hidden sm:flex flex-col items-start w-full gap-4">
              <div className="bg-secondary w-full md:w-fit py-4 px-8 rounded-2xl">
                <div className="flex flex-row text-white gap-4 items-center justify-center">
                  <div className="w-8 h-8 bg-secondary-background" />
                  <p className="bg-secondary-background text-secondary-background">
                    Get Started
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-15 pt-10">
                <HomeLoadingStatItemSkeleton />
                <HomeLoadingStatItemSkeleton />
                <HomeLoadingStatItemSkeleton />
              </div>
            </div>
          </div>
          <div className="max-w-sm rounded-xl  overflow-hidden">
            <NFTCardLoadingSkeleton/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeLoadingSkeleton;
