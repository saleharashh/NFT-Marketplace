import { User, User2 } from "lucide-react";
import React from "react";

export interface LoginInputType {
  title: string;
  icon: React.ReactNode;
}

export default function LoginInput({ title, icon }: LoginInputType) {
  return (
    <div className="flex max-w-sm flex-row gap-4 px-4 py-4  border border-secondary-text bg-white rounded-full">
      {icon}
      <input
        type="text"
        className="text-background h-max focus:outline-0"
        placeholder={title}
      />
    </div>
  );
}
