import { hoverAnimation } from "@/utils";
import { Search } from "lucide-react";
import Link from "next/link";

export default function BrowseCategorySection() {
  const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="mt-5 flex flex-col gap-2">
        <h1 className="text-3xl">Browse Categories</h1>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {array.map((i) => (
            <Link key={i} href={"/marketplace"} className={`${hoverAnimation}`}>
              <div className="flex flex-col rounded-2xl  bg-secondary-background ">
                <div
                  className="relative  h-40 rounded-t-2xl overflow-hidden bg-center bg-cover"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1606112219348-204d7d8b94ee?auto=format&fit=crop&w=800&q=80')",
                  }}
                >
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center">
                    {/* Center Icon */}
                    <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
                      <Search className="text-white text-2xl" />
                    </div>
                  </div>
                </div>
                <p className="my-4 mx-5">qwe</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
