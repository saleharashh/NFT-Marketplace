import { Globe, MoveRight } from "lucide-react";
import NFTCard from "../components/NFTCard";

export default function NFTPage() {
  return (
    <div className="flex flex-col">
      <img src="" alt="" className=" min-h-64  w-full bg-primary" />
      <div className="flex flex-col p-10 gap-4">
        <div className="flex flex-col gap4 md:flex-row">
          <div className="flex flex-col md:w-1/2 gap-4">
            <h1 className="text-white font-bold">The Orbitians</h1>
            <p className="text-secondary-text">Minted on Sep 30, 2022</p>

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
            <img src="" alt="" className="w-6 h-6 bg-primary rounded-full" />
            <p>Dish Studio</p>
          </div>
        </div>
        <p className=" text-secondary-text">Description</p>
        <p>
          The Orbitians is a collection of 10,000 unique NFTs on the Ethereum
          blockchain,  There are all sorts of beings in the NFT Universe. The
          most advanced and friendly of the bunch are Orbitians.   They live in
          a metal space machines, high up in the sky and only have one foot on
          Earth. These Orbitians are a peaceful race, but they have been at war
          with a group of invaders for many generations. The invaders are called
          Upside-Downs, because of their inverted bodies that live on the
          ground, yet do not know any other way to be. Upside-Downs believe that
          they will be able to win this war if they could only get an eye into
          Orbitian territory, so they've taken to make human beings their
          target.
        </p>
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
        <div className="flex flex-row w-full items-center justify-between">
          <h1>More From This Artist</h1>
          <button className="hidden md:flex flex-row gap-4 border border-primary items-center justify-center py-4 px-4 rounded-2xl">
            <MoveRight color="#a259ff" />
            <p>Go to Artist Page</p>
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </div>
        <button className="flex flex-row md:hidden gap-4 border border-primary items-center justify-center py-4 rounded-2xl">
          <MoveRight color="#a259ff" />
          <p>Go to Artist Page</p>
        </button>
      </div>
    </div>
  );
}
