import { NFT } from "@/app/components/NFTCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchNftsByCreatorId(): Promise<NFT> {
  try {
    const res = await axios.get("http://localhost:3000/nft/getNftByCreatorId", {
      params: { id: 1 },
    });
    return res.data.data;
  } catch (error) {
    throw new Error("Network response was not Ok");
  }
}

export function useGetNft() {
  return useQuery<NFT, Error>({
    queryKey: ["artists"],
    queryFn: fetchNftsByCreatorId,
  });
}
