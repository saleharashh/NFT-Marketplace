"use client";
import { Globe, MoveRight } from "lucide-react";
import NFTCard from "../components/NFTCard";
import { useGetNft } from "@/services/get_nft_service";
import MoreFromArtistSecition from "./components/MoreFromArtistSection";

export default function NFTPage() {
  const { data, isLoading, isError, error } = useGetNft();

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;
  return (
    <div className="flex flex-col">
      <img
        src={`http://localhost:3000/uploads/${data?.image}`}
        alt=""
        className=" min-h-64 max-h-134 max-w-full w-full bg-primary"
      />
      <div className="flex flex-col p-10 gap-4 md:px-20 lg:px-40 2xl:px-100">

        <div className="flex flex-col gap4 md:flex-row">
          <div className="flex flex-col md:w-1/2 gap-4">
            <h1 className="text-white font-bold">{`${data?.name}`}</h1>
            <p className="text-secondary-text mb-5 md:mb-0">Minted on Sep 30, 2022</p>

            <div className="hidden md:flex flex-col gap-4 mt-10 ">
              <p className="text-secondary-text">Created By</p>
              <div className="flex flex-row gap-4 items-center">
                <img
                  src=""
                  alt=""
                  className="w-6 h-6 bg-primary rounded-full"
                />
                <p>Dish Studio</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl w-full md:w-1/2 bg-secondary-background p-6">
            <h1>Action ends in:</h1>
            <div className="flex flex-row gap-2  p-4 w-full justify-between">
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1>59</h1>
                <p>Hours</p>
              </div>
              <p>:</p>
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1>59</h1>
                <p>Hours</p>
              </div>
              <p>:</p>
              <div className="flex flex-col gap-2 items-center justify-center">
                <h1>59</h1>
                <p>Hours</p>
              </div>
            </div>
            <button className="py-2 px-4 bg-primary rounded-2xl">
              Place Bid
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:hidden">
          <p className="text-secondary-text">Created By</p>
          <div className="flex flex-row gap-4 items-center">
            <img
              src={`http://localhost:3000/uploads/${data?.artistProfile}`}
              className="w-6 h-6 bg-primary rounded-full"
            />
            <p>{data?.artistName}</p>
          </div>
        </div>
        <p className=" text-secondary-text">Description</p>
        <p>{data?.description}</p>
        <p className="text-secondary-text">Details</p>
        <div className="flex flex-row gap-3">
          <Globe />
          <p>View on Etherscan</p>
        </div>
        <div className="flex flex-row gap-3">
          <Globe />
          <p>View Orginal</p>
        </div>
        <p className="text-secondary-text">Tags</p>
        <div className="flex flex-col lg:flex-row gap-4">
          <p className="bg-secondary-background w-fit px-5 py-2 rounded-full">
            Animation
          </p>
          <p className="bg-secondary-background w-fit px-5 py-2 rounded-full">
            Illustration
          </p>
          <p className="bg-secondary-background w-fit px-5 py-2 rounded-full">
            Moon
          </p>
        </div>
        <MoreFromArtistSecition />
      </div>
    </div>
  );
}
