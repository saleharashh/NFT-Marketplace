"use client";
import { Search } from "lucide-react";
import TabLayout from "../components/TabLayout";
import NFTCard from "../components/NFTCard";
import { useGetAllNFTs } from "@/services/get_all_nfts_service";

export default function Marketplace() {
  const { data, isLoading, isError, error } = useGetAllNFTs();
  const tabs: string[] = ["NFTs", "Collections"];
  return (
    <div className="flex flex-col lg:px-20 xl:px-50">
      <div className="flex flex-col  gap-4 px-10 pt-10">
        <h1 className="text-2xl font-bold">Browse Marketplace</h1>
        <p>Browse through more than 50k NFTs on the NFT Marketplace.</p>
        <div className="flex flex-row items-center justify-between border rounded-2xl px-4 py-4 border-secondary-text">
          <input
            type="text"
            placeholder="Search your favorite NFTs"
            className="placeholder-secondary-text w-full focus:outline-0"
          />
          <Search />
        </div>
      </div>
      <TabLayout
        content={
          <div className=" px-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {data?.map((item, index) => (
              <NFTCard {...item} key={index} />
            ))}
          </div>
        }
        tabs={tabs}
      />
    </div>
  );
}
