import { NFT } from "@/app/components/NFTCard";
import axiosClient from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchAllNftsService(): Promise<NFT[]> {
  try {
    const res = await axiosClient.get("/nft/getAllNfts");

    return res.data.data!;
  } catch (error) {
    throw new Error("Network Error was Not Ok!");
  }
}

export function useGetAllNFTs() {
  return useQuery<NFT[], Error>({
    queryKey: ["getAllNFTs"],
    queryFn: fetchAllNftsService,
    gcTime: 0,
    staleTime: 0,
    refetchOnMount: true,
  });
}
