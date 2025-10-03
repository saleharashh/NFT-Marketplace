"use client";
import NFTCard from "@/app/components/NFTCard";
import { useGetArtistOwnedNFTs } from "@/services/get_artist_owned_nft_service";

export default function ArtistNFTs() {
  const { data, isLoading, isError, error } = useGetArtistOwnedNFTs();
  if (isLoading) return <p>Is Loading...</p>;
  if (isError) return <p>{error.message}</p>;
  return (
    <div
      className={`px-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:${
        data?.length === 3 ? "grid-cols-3" : "grid-cols-2"
      } gap-2`}
    >
      {data?.map((item, index) => (
        <NFTCard key={index} {...item} />
      ))}
    </div>
  );
}
