import { Rocket } from "lucide-react";
import Link from "next/link";

export default function TopCreatorsSections() {
  const array: number[] = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <div className="mt-4 flex flex-col gap-2">
        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <h1 className="text-xl">Top Creators</h1>
              <p className="text-sm">
                Checkout Top Rated Creators On The NFT Marketplacer
              </p>
            </div>
            <div className="hidden md:flex flex-row justify-center items-center rounded-2xl border-primary border px-8 py-2 gap-4">
              <Rocket />
              <p>View Rankings</p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {array.map((i) => (
              <Link href={"/artist"}>
                <div className="flex lg:flex-col  lg:items-center lg:justify-center w-full items-center gap-3 bg-gray-800 rounded-lg px-4 py-2 bg-secondary-background">
                  <div className="relative">
                    <img
                      // src="avatar.jpg"
                      // alt="User"
                      className="w-12 h-12 lg:w-24 lg:h-24 rounded-full bg-primary"
                    />
                    <div className="absolute -top-1 -left-1 bg-gray-700 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                      1
                    </div>
                  </div>
                  <div className=" flex flex-col items-center justify-center gap-2">
                    <h3 className="text-white font-semibold">Keepitreal</h3>
                    <div className="flex flex-row">
                      <p className="text-secondary-text text-sm">
                        Total Sales:{" "}
                        <span className="text-white font-medium">
                          34.53 ETH
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-4 flex sm:hidden flex-row justify-center items-center rounded-2xl border-primary border px-8 py-2 gap-4">
            <Rocket />
            <p>View Rankings</p>
          </div>
        </div>
      </div>
    </>
  );
}
