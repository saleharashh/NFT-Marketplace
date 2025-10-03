"use client";
import { Search } from "lucide-react";
import TabLayout from "../components/TabLayout";
import TabItem from "../components/TabItem";
import { useGetAllArtists } from "@/services/get_all_artists_service";
import { it } from "node:test";

export default function RankingPage() {
  const { data, isLoading, isError, error } = useGetAllArtists();
  const tabs: string[] = ["1d", "7d", "30d", "all time"];
  if (isLoading) return <>Loading...</>;
  if (isError) return <>{error}</>;
  return (
    <div className="flex flex-col p-10">
      <div className="flex flex-col  gap-4  pt-10">
        <h1 className="text-2xl font-bold">Top Creators</h1>
        <p>Check out top ranking NFT artists on the NFT Marketplace.</p>
      </div>
      <TabLayout
        tabs={tabs}
        content={
          <table>
            <tr className="flex flex-row rounded-2xl justify-between items-start pr-10 pl-4 py-2 md:px-8 border border-secondary-background">
              <td className="text-secondary-text w-1/12">#</td>
              <td className="text-secondary-text w-9/12 md:w-7/12 lg:w-5/12">
                Artist
              </td>
              <td className="hidden text-secondary-text md:flex w-2/12">
                Change
              </td>
              <td className="hidden text-secondary-text lg:flex w-2/12">
                NFTs Sold
              </td>
              <td className="text-secondary-text w-2/12">Volume</td>
            </tr>

            {data!.map((item, index) => (
              <tr
                key={index}
                className="mt-2 flex flex-row rounded-2xl justify-between items-center py-4 px-8  bg-secondary-background"
              >
                <td className="text-secondary-text w-1/12">{index}</td>
                <td className="text-secondary-text w-9/12 md:w-7/12 lg:w-5/12">
                  <div className="flex flex-row items-center gap-4">
                    <img
                      src={`${item.profileImage}`}
                      alt=""
                      className="w-4 h-4 bg-primary rounded-full"
                    />
                    <p className="text-secondary-text">{item.name}</p>
                  </div>
                </td>
                <td className="hidden text-white md:flex w-2/12">+1.42%</td>
                <td className="hidden text-white lg:flex w-2/12 ">
                  {item.nftSolds}
                </td>
                <td className="text-white w-2/12">{item.volume} ETH</td>
              </tr>
            ))}
          </table>
        }
      />
      {/* <ol className="flex flex-row gap-2 md:gap-4 items-center justify-center mx-10 mt-2">
        <TabItem />
        <li className=" ">Created</li>
        <li className=" p-5">Created</li>
      </ol> */}
    </div>
  );
}
