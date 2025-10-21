"use client";

import React, { useState } from "react";

import TabItem from "./TabItem";

export interface TabLayoutType {
  tabs: string[];

  content: React.ReactNode;
}

export default function TabLayout({ tabs, content }: TabLayoutType) {
  const [selectedTab, setSelectedTab] = useState<number>(0);
  function handleTabClick(index: number): void {
    console.log(index);
    setSelectedTab(index);
  }

  return (
    <div className="flex flex-col">
      {/* tabs section */}
      <ol className="flex flex-row gap-2 md:gap-4 items-center justify-center mx-10 mt-2 " >
        {tabs.map((item, index) => (
          <TabItem
            index={index}
            onClick={() => handleTabClick(index)}
            isSelected={index === selectedTab}
            title={item}
            key={index}
          />
        ))}
      </ol>
      {/* content section  */}
      {content}
      {/* <div className=" w-full min-h-100 mb-1 pb-10">
        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-10 gap-4 items-center justify-between">
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </div>
      </div> */}
    </div>
  );
}
