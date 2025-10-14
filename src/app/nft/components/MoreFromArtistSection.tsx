import NFTCard from "@/app/components/NFTCard";
import OutlinedRoundedButton from "@/app/components/OutlinedRoundedButton";
import { useGetArtistOwnedNFTs } from "@/services/get_artist_owned_nft_service";
import { useGetNft } from "@/services/get_nft_by_creator_id_service";
import { MoveRight } from "lucide-react";
import { it } from "node:test";

export default function MoreFromArtistSecition({ id }: { id: string }) {
  const { data, isLoading, isError, error } = useGetNft(id);

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <>
      <div className="flex flex-row w-full items-center justify-between">
        <h1>More From This Artist</h1>
        <OutlinedRoundedButton
          onClick={() => {}}
          className="hidden md:flex flex-row gap-4 border border-primary items-center justify-center py-4 px-4 rounded-2xl"
        >
          <MoveRight color="#a259ff" />
          <p>Go to Artist Page</p>
        </OutlinedRoundedButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data?.map((item, index) => (
          <NFTCard {...item} />
        ))}
      </div>
      <OutlinedRoundedButton onClick={() => {}} className={"md:hidden"}>
        <MoveRight color="#a259ff" />
        <p>Go to Artist Page</p>
      </OutlinedRoundedButton>
    </>
  );
}
