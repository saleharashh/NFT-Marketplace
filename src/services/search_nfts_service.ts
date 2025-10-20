import { NFT } from "@/app/models/NFT";
import axiosClient from "@/lib/axiosClient";
import { useMutation } from "@tanstack/react-query";

async function searchNftService(search: string): Promise<NFT[]> {
  try {
    const res = await axiosClient.get(`/nft/getAllNfts?search=${search}`);
    return res.data.data!;
  } catch (error) {
    throw new Error("Network Error was Not Ok!");
  }
}

export function useSearchNFTs(search: string) {
  const { mutate, data, isPending, isError, error } = useMutation<NFT[], Error>(
    {
      mutationKey: ["getAllNFTs"],
      mutationFn: () => searchNftService(search),
    }
  );
  return {
    mutate,
    nfts: data,
    isPending,
    searchIsError: isError,
    searchError: error,
  };
}
