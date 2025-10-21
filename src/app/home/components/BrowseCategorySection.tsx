import { Category } from "@/app/models/Category";
import { hoverAnimation } from "@/utils";
import {
  Brush,
  Camera,
  Earth,
  LibraryBigIcon,
  Music,

  Video,
  Volleyball,
  Wand2,
} from "lucide-react";
import Link from "next/link";

export default function BrowseCategorySection() {
  const array: Category[] = [
    {
      name: "Art",
      icon: <Brush />,
      backgroundImage: "nftImage-1759495534311.png",
    },
    {
      name: "Collectibles",
      icon: <LibraryBigIcon />,
      backgroundImage: "nft7145100_1280.jpg",
    },
    {
      name: "Music",
      icon: <Music />,
      backgroundImage: "nft7040416_1280.png",
    },
    {
      name: "Photography",
      icon: <Camera />,
      backgroundImage: "nft-6046020_1280.jpg",
    },
    {
      name: "Video",
      icon: <Video />,
      backgroundImage: "backgroundImage1293124821.jpg",
    },
    {
      name: "Utility",
      icon: <Wand2 />,
      backgroundImage: "backgroundImage-1759495885555.png",
    },
    {
      name: "Sport",
      icon: <Earth />,
      backgroundImage: "backgroundImage-175124125.jpg",
    },
    {
      name: "Virtual Worlds",
      icon: <Volleyball />,
      backgroundImage: "backgroundImage-1759495846750.png",
    },
  ];
  return (
    <>
      <div className="mt-5 flex flex-col gap-2">
        <h1 className="text-3xl">Browse Categories</h1>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {array.map((item, index) => (
            <Link
              key={index}
              href={"/marketplace"}
              className={`${hoverAnimation}`}
            >
              <div className="flex flex-col rounded-2xl  bg-secondary-background ">
                <div
                  className="relative  h-40 rounded-t-2xl overflow-hidden bg-center bg-cover"
                  style={{
                    backgroundImage: `url(${process.env.NEXT_PUBLIC_BASE_IMAGES_URL}/${item.backgroundImage})`,
                  }}
                >
                  {/* Glass overlay */}
                  <div className="absolute inset-0 bg-white/20 backdrop-blur-md flex items-center justify-center">
                    {/* Center Icon */}
                    <div className="w-12 h-12 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm">
                      {item.icon}
                    </div>
                  </div>
                </div>
                <p className="my-4 mx-5">{item.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
