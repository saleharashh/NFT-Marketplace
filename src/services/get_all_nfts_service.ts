import { NFT } from "@/app/components/NFTCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

async function fetchAllNftsService(): Promise<NFT[]> {
  try {
    const res = await axios.get("http://localhost:3000/nft/getAllNfts");

    return res.data.data!;
  } catch (error) {
    throw new Error("Network Error was Not Ok!");
  }
}

export  function useGetAllNFTs() {
  return useQuery<NFT[], Error>({
    queryKey: ["getAllNFTs"],
    queryFn: fetchAllNftsService,
  });
}
