"use client";
import { ReactNode } from "react";

interface FilledRoundedButton {
  children: ReactNode;
  onClick: () => void;
}
export default function FilledRoundedButton({
  children,
  onClick,
}: FilledRoundedButton) {
  return (
    <div
      className="py-4 px-5 gap-2 bg-primary rounded-xl hover:scale-95 transition-all duration-200 cursor-pointer flex items-center justify-center"
      onClick={onClick}
    >
      {children}
    </div>
  );
}
