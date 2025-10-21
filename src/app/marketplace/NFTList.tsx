import NFTCard from "../components/NFTCard";
import { NFT } from "../models/NFT";

const NFTList = ({ data }: { data: NFT[] }) => {
  return (
    <div className=" px-10 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
      {data?.map((item, index) => (
        <NFTCard {...item} key={index} />
      ))}
    </div>
  );
};

export default NFTList;
