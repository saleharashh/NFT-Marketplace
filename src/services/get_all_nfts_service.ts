import { NFT } from "@/app/models/NFT";
import axiosClient from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";

async function fetchAllNftsService(): Promise<NFT[]> {
  try {
    const res = await axiosClient.get("/nft/getAllNfts?search=");
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
