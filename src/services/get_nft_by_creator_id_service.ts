import { NFT } from "@/app/models/NFT";
import axiosClient from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchNftsByCreatorId(id: string): Promise<NFT[]> {
  try {
    const res = await axiosClient.get("/nft/getByCreatorId", {
      params: { creatorId: id },
    });
    return res.data.data;
  } catch (error) {
    throw new Error("Network response was not Ok");
  }
}

export function useGetNft(id: string) {
  return useQuery<NFT[], Error>({
    queryKey: ["get_nft_by_creator_id"],
    queryFn: () => fetchNftsByCreatorId(id),
    gcTime: 0,
    staleTime: 0,
    refetchOnMount: true,
  });
}
