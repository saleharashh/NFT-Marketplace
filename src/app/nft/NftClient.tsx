"use client";
import DetailSections from "./components/DetailsSection";
import MoreFromArtistSecition from "./components/MoreFromArtistSection";
import TagsSection from "./components/TagsSection";
import { useSearchParams } from "next/navigation";
import { useGetNft } from "@/services/get_nft_service";
import Link from "next/link";
import ActionBid from "./components/ActionBid";
import NFTLoadingSkeleton from "./components/NFTLoadingSkeleton";
import Image from "next/image";

const NftClient = () => {
  const searchParamas = useSearchParams();
  const id = searchParamas.get("id") ?? "";
  const { data, isLoading, isFetching, isError, error } = useGetNft(id);

  if (isLoading || isFetching) return <NFTLoadingSkeleton />;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="flex flex-col">
      <Image
        src={`http://localhost:3000/uploads/${data?.image}`}
        alt=""
        className=" min-h-64 max-h-134 max-w-full w-full bg-primary"
      />
      <div className="flex flex-col p-10 gap-4 md:px-20 lg:px-40 2xl:px-100">
        <div className="flex flex-col gap4 md:flex-row">
          <div className="flex flex-col md:w-1/2 gap-4">
            <h1 className="text-white font-bold">{`${data?.name}`}</h1>
            <p className="text-secondary-text mb-5 md:mb-0">
              Minted on Sep 30, 2022
            </p>

            <div className="hidden md:flex flex-col gap-4 mt-10 ">
              <p className="text-secondary-text">Created By</p>
              <Link
                href={{
                  pathname: "/artist",
                  query: { id: data!.creatorId.toString() },
                }}
                className="flex flex-row gap-4 items-center hover:scale-95 transition-all duration-200 cursor-pointer"
              >
                <Image
                  src={`http://localhost:3000/uploads/${data?.artistProfile}`}
                  alt=""
                  className="w-6 h-6 bg-primary rounded-full"
                />
                <p>{data?.artistName}</p>
              </Link>
            </div>
          </div>
          <ActionBid />
        </div>
        <div className="flex flex-col gap-4 md:hidden">
          <p className="text-secondary-text">Created By</p>
          <div className="flex flex-row gap-4 items-center hover:scale-110 transition-all duration-200 cursor-pointer">
            <Image
              src={`${process.env.NEXT_PUBLIC_BASE_IMAGES_URL}/uploads/${data?.artistProfile}`}
              className="w-6 h-6 bg-primary rounded-full" alt={""}            />
            <p>{data?.artistName}</p>
          </div>
        </div>
        <p className=" text-secondary-text">Description</p>
        <p>{data?.description}</p>

        <DetailSections />
        <TagsSection />
        <MoreFromArtistSecition id={data!.creatorId} />
      </div>
    </div>
  );
};

export default NftClient;
