import { Menu, Store, User } from "lucide-react";
import Link from "next/link";

export default function Appbar() {
  const pages: string[] = ["Marketplace", "Ranking", "Connect Wallet"];
  return (
    <div className="flex flex-row justify-between items-center py-4 px-6 lg:px-16 xl:px-32 hover:bg-white">
      <Link className="flex flex-row gap-4 items-center" href={"/"}>
        <Store color="#a259ff" />
        <h6 className="text-sm font-bold">NFT Marketplace</h6>
      </Link>
      <Menu className="lg:hidden" />
      <div className="hidden lg:flex  flex-row gap-4 items-center">
        {pages.map((item, index) => (
          <h1 key={index} className="px-5 py-2">
            {item}
          </h1>
        ))}
        <button className="py-4 px-5 bg-primary rounded-3xl">
          <div className="flex flex-row gap-4">
            <User />
            <p>Sign Up</p>
          </div>
        </button>
      </div>
    </div>
  );
}
