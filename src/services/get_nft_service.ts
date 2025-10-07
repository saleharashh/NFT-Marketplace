import { NFT } from "@/app/components/NFTCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchNft(id: string): Promise<NFT> {
  try {
    const res = await axios.get("http://localhost:3000/nft/getNftById", {
      params: { id: 1 },
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
  });
}
