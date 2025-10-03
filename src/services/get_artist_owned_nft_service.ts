import { Artist } from "@/app/models/Artist";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchArtistNFTs(): Promise<Artist[]> {
  try {
    const res = await axios.get("http://localhost:3000/nft/getByOwnerId", {
      params: { ownerId: "1" },
    });
    console.log(res.data);
    return res.data.data;
  } catch (error) {
    throw new Error("Network response was not Ok");
  }
}

export function useGetArtistOwnedNFTs() {
  return useQuery<Artist[], Error>({
    queryKey: ["artistOwnedNFTs"],
    queryFn: fetchArtistNFTs,
  });
}
