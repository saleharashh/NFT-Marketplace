"use client";
import { useArtists } from "@/services/get_artist_service";
import TabLayout from "../components/TabLayout";
import ArtistInfoSection from "./components/ArtistInfoSection";
import ArtistLoadingSkeleton from "./components/ArtistLoadingSkeleton";
import ArtistHeroSection from "./components/HeroSection";
import OwnedNFTs from "./components/ArtistNFTs";
import Artist from "./page";

const ArtistClient = () => {
  const { data, isLoading, isError, error } = useArtists();

  const tabs = ["Created", "Owned", "Collection"];

  if (isLoading) return <ArtistLoadingSkeleton />;
  if (isError) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <div className="flex flex-col ">
      <ArtistHeroSection
        profileImage={data?.profileImage!}
        backgroundImage={data?.backgroundImage!}
      />
      <div className="lg:px-50">
        <div className="px-10 ">
          <ArtistInfoSection {...data!} />
        </div>
        <TabLayout tabs={tabs} content={<OwnedNFTs />} />
      </div>
    </div>
  );
};

export default ArtistClient;
