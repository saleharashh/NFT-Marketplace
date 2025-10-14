"use client";
import { useArtists } from "@/services/get_artist_service";
import TabLayout from "../components/TabLayout";
import ArtistInfoSection from "./components/ArtistInfoSection";
import ArtistLoadingSkeleton from "./components/ArtistLoadingSkeleton";
import ArtistHeroSection from "./components/HeroSection";
import OwnedNFTs from "./components/ArtistNFTs";
import Artist from "./page";
import { useQueryClient } from "@tanstack/react-query";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useRef } from "react";
import { useNavigation } from "../hooks/NavigationContext";
import { ARtistNFTType } from "@/lib/ArtistNFTType";

const ArtistClient = () => {
  const id = useSearchParams().get("id");
  const { data, isLoading, isFetching, isError, error } = useArtists(id!);
  const tabs = ["Created", "Owned", "Collection"];
  if (isLoading || isFetching) return <ArtistLoadingSkeleton />;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col">
      <ArtistHeroSection
        profileImage={data?.profileImage!}
        backgroundImage={data?.backgroundImage!}
      />
      <div className="lg:px-50">
        <div className="px-10 ">
          <ArtistInfoSection {...data!} />
        </div>
        <TabLayout
          tabs={tabs}
          content={<OwnedNFTs id={id!} type={ARtistNFTType.Created} />}
        />
      </div>
    </div>
  );
};

export default ArtistClient;
