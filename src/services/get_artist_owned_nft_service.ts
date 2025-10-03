import { NFT } from "@/app/components/NFTCard";
import { Artist } from "@/app/models/Artist";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchArtistNFTs(): Promise<NFT[]> {
  try {
    const res = await axios.get("http://localhost:3000/nft/getByCreatorId", {
      params: { creatorId : "1" },
    });
    return res.data.data;
  } catch (error) {
    throw new Error("Network response was not Ok");
  }
}

export function useGetArtistOwnedNFTs() {
  return useQuery<NFT[], Error>({
    queryKey: ["artistOwnedNFTs"],
    queryFn: fetchArtistNFTs,
  });
}
