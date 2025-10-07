"use client";
import ArtistInfoSection from "./components/ArtistInfoSection";
import ArtistHeroSection from "./components/HeroSection";
import NFTCard from "../components/NFTCard";
import TabLayout from "../components/TabLayout";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useArtists } from "@/services/get_artist_service";
import OwnedNFTs from "./components/ArtistNFTs";

export default function Artist() {
  const { data, isLoading, isError, error } = useArtists();

  const tabs = ["Created", "Owned", "Collection"];

  if (isLoading) return <p>loading...</p>;
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
}
