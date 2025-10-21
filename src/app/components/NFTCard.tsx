import Link from "next/link";
import { NFT } from "../models/NFT";
import Image from "next/image";

export default function NFTCard(nft: NFT) {
  return (
    <Link href={{ pathname: `/nft`, query: { id: nft.id.toString() } }}>
      <div className="max-w-md w-full rounded-2xl bg-secondary-background flex flex-col hover:scale-95 transition-all duration-200 cursor-pointer">
        <img
          src={`http://localhost:3000/uploads/${nft.image}`}
          alt="qwe"
          className="bg-primary hover:bg-white h-64 object-cover rounded-t-2xl"
        />
        <div className="p-6">
          <h1 className="text-xl font-bold text-white">{nft.name}</h1>
          <div className="flex flex-row items-center gap-2">
            <img
              src={`http://localhost:3000/uploads/${nft.artistProfile}`}
              className="w-8 h-8  rounded-full"
              alt={""}
            />
            {/* <div className="w-8 h-8 bg-primary rounded-full"> </div> */}
            <p className="text-sm">{nft.artistName}</p>
          </div>
          <div className="mt-3 flex flex-row justify-between items-center">
            <div className="flex flex-col items-center">
              <h1 className="text-secondary-text">Price</h1>
              <p>{nft.price} ETH</p>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-secondary-text">Highest Bid</h1>
              <p>{nft.highestBid} wETH</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
