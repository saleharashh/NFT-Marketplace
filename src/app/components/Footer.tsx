"use client";
import { hoverAnimation } from "@/utils";
import {
  Facebook,
  Instagram,
  InstagramIcon,
  Mail,
  Store,
  TwitchIcon,
  Twitter,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import { ChangeEvent, useState } from "react";

export default function Footer() {
  const [subscribe_email, setSubscribe_email] = useState<string>("");
  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setSubscribe_email(event.target.value);
  }

  return (
    <div className="flex flex-col xl:flex-row gap-4 xl:gap-20 p-10 xl:px-90">
      <div className="flex flex-col gap-5">
        <div className="flex flex-row text-primary gap-4">
          <Store color="#a259ff" />
          <h1 className="text-white text-xl">NFT Marketplace</h1>
        </div>
        <p className="text-secondary-text">
          NFT marketplace UI created with Anima for Figma.
        </p>
        <p className="text-secondary-text">join our community</p>
        <div className="flex flex-row gap-4">
          <TwitchIcon color="#858584" />
          <Youtube color="#858584" />
          <Twitter color="#858584" />
          <Instagram color="#858584" />
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-2xl">Explore</h1>
        <Link className={`text-secondary-text ${hoverAnimation}`} href={"/marketplace"}>Marketplace</Link>
        <Link className={`text-secondary-text ${hoverAnimation}`} href={"/ranking"}>Rankings</Link>
        <Link className={`text-secondary-text ${hoverAnimation}`} href={"/connect_wallet"}>Connect a Wallet</Link>
      </div>

      <div className="flex flex-col gap-5">
        <h1>Join Our Weekly Digest</h1>
        <p className="text-secondary-text">
          Get exclusive promotions & updates straight to your inbox
        </p>
        <div className="flex flex-row max-w-md w-full rounded-4xl gap-3 pl-4 bg-white">
          <input
            type="text"
            placeholder="Enter Your Email Address"
            className="w-full text-background focus:outline-0"
          />
          <div className="flex flex-row items-center justify-center w-full bg-primary p-4 rounded-4xl gap-4">
            <Mail color="white" />
            <p>Subscribe</p>
          </div>
        </div>
        <div className="flex md:hidden flex-row items-center justify-center w-full bg-primary p-4 rounded-4xl gap-4">
          <Mail color="white" />
          <p>Subscribe</p>
        </div>
      </div>
    </div>
  );
}
