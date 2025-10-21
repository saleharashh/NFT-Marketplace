"use client";
import { Search } from "lucide-react";
import TabLayout from "../components/TabLayout";
import { useGetAllNFTs } from "@/services/get_all_nfts_service";
import { useSearchNFTs } from "@/services/search_nfts_service";
import NFTList from "./NFTList";
import { ChangeEvent, useEffect, useState } from "react";
import NFTCardLoadingSkeleton from "../components/NFTCardLoadingSkeleton";

export default function Marketplace() {
  const [search, setsearch] = useState("");
  const { data } = useGetAllNFTs();
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  useEffect(() => {
    mutate();
  }, [debouncedSearch]);

  const { mutate, nfts, isPending } =
    useSearchNFTs(search);

  const tabs: string[] = ["NFTs", "Collections"];
  function handleOnChange(event: ChangeEvent<HTMLInputElement>): void {
    setsearch(event.target.value);
    // mutate();
  }

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
            onChange={handleOnChange}
          />
          <Search />
        </div>
      </div>
      <TabLayout
        content={
          isPending ? (
            <div className="w-full  flex gap-4 px-10 py-10 flex-row items-center justify-center ">
              <NFTCardLoadingSkeleton />
              <NFTCardLoadingSkeleton />
              <NFTCardLoadingSkeleton />
            </div>
          ) : (
            <NFTList data={nfts ? nfts! : data!} />
          )
        }
        tabs={tabs}
      />
    </div>
  );
}
