
import { NFT } from "@/app/models/NFT";
import axiosClient from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchNft(id: string): Promise<NFT> {
  try {
    const res = await axiosClient.get("/nft/getNftById", {
      params: { id: id },
    });
    return res.data.data;
  } catch (error) {
    throw new Error("Network response was not Ok");
  }
}

export function useGetNft(id: string) {
  return useQuery<NFT, Error>({
    queryKey: ["getNftById"],
    queryFn: () => fetchNft(id),
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });
}
