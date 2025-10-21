import { NFT } from "@/app/models/NFT";
import axiosClient from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";

async function fetchArtistNFTs(id: string): Promise<NFT[]> {
  try {
    const res = await axiosClient.get("/nft/getByOwnerId", {
      params: { ownerId: id },
    });
    return res.data.data;
  } catch (error) {
    throw new Error("Network response was not Ok");
  }
}

export function useGetArtistOwnedNFTs(id: string) {
  return useQuery<NFT[], Error>({
    queryKey: ["artistOwnedNFTs"],
    queryFn: () => fetchArtistNFTs(id),
  });
}
