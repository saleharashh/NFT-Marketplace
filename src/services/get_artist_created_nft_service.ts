import { NFT } from "@/app/components/NFTCard";
import axiosClient from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";

async function fetchArtistNFTs(id: string): Promise<NFT[]> {
  try {
    const res = await axiosClient.get("/nft/getByCreatorId", {
      params: { creatorId: id },
    });
    return res.data.data;
  } catch (error) {
    throw new Error("Network response was not Ok");
  }
}

export function useGetArtistCreatedNFTs(id: string) {
  return useQuery<NFT[], Error>({
    queryKey: ["artistCreatedNFTs"],
    queryFn: () => fetchArtistNFTs(id),
    gcTime: 0,
    staleTime: 0,
    refetchOnMount: true,
  });
}
