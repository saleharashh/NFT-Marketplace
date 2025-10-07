"use client";
import { Menu, Store, User } from "lucide-react";
import Link from "next/link";
import FilledRoundedButton from "./FilledRoundedButton";

export interface Pages {
  name: string;
  route: string;
}

export default function Appbar() {
  const pages: Pages[] = [
    { name: "Marketplace", route: "marketplace" },
    { name: "Ranking", route: "rankings" },
    { name: "Connect a Wallet", route: "marketplace" },
  ];
  return (
    <div className="flex flex-row justify-between items-center py-4 px-6 lg:px-16 xl:px-32 ">
      <Link
        className="flex flex-row gap-4 items-center hover:scale-95 transition-all duration-200 cursor-pointer"
        href={"/"}
      >
        <Store color="#a259ff" />
        <h6 className="text-sm font-bold">NFT Marketplace</h6>
      </Link>
      <Menu className="lg:hidden" />
      <div className="hidden lg:flex  flex-row gap-4 items-center">
        {pages.map((item, index) => (
          <Link
            href={item.route}
            key={index}
            className="px-5 py-2 hover:scale-95 transition-all duration-200 cursor-pointer"
          >
            {item.name}
          </Link>
        ))}
        <FilledRoundedButton onClick={() => {}}>
          <div className="flex flex-row gap-4">
            <User />
            <p>Sign Up</p>
          </div>
        </FilledRoundedButton>
      </div>
    </div>
  );
}
