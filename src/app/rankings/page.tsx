"use client";
import { Search } from "lucide-react";
import TabLayout from "../components/TabLayout";
import TabItem from "../components/TabItem";
import { useGetAllArtists } from "@/services/get_all_artists_service";
import { it } from "node:test";
import Link from "next/link";
import ArtistList from "./components/ArtistList";
import { useSearchArtists } from "@/services/search_artists_service";
import { useState } from "react";

export default function RankingPage() {
  const [search, setSearch] = useState("");
  const { data, isLoading, isError, error } = useGetAllArtists();
  const { mutate, artists, isPending, searchIsError, searchError } =
    useSearchArtists(search);

    
  const tabs: string[] = ["1d", "7d", "30d", "all time"];
  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error}</>;
  return (
    <div className="flex flex-col p-10 lg:px-50">
      <div className="flex flex-col  gap-4  pt-10">
        <h1 className="text-2xl font-bold">Top Creators</h1>
        <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
      </div>
      <TabLayout tabs={tabs} content={<ArtistList data={data!} />} />
      {/* <ol className="flex flex-row gap-2 md:gap-4 items-center justify-center mx-10 mt-2">
        <TabItem />
        <li className=" ">Created</li>
        <li className=" p-5">Created</li>
      </ol> */}
    </div>
  );
}
