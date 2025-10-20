import { NFT } from "@/app/models/NFT";
import { ARtistNFTType } from "@/lib/ArtistNFTType";
import axiosClient from "@/lib/axiosClient";
import { useQuery } from "@tanstack/react-query";

async function fetchArtistNFTs(id: string,type:ARtistNFTType): Promise<NFT[]> {
  try {
    const res = await axiosClient.get(type==ARtistNFTType.Created?"/nft/getByCreatorId":"/nft/getByOwnerId", {
      params: { creatorId: id },
    });
    return res.data.data;
  } catch (error) {
    throw new Error("Network response was not Ok");
  }
}

export function useGetArtistCreatedNFTs(id: string,type:ARtistNFTType) {
  return useQuery<NFT[], Error>({
    queryKey: ["artistCreatedNFTs"],
    queryFn: () => fetchArtistNFTs(id,type),
    gcTime: 0,
    staleTime: 0,
    refetchOnMount: true,
  });
}
