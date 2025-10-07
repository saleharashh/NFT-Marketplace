import { ReactNode } from "react";

interface OutlinedRoundedButtonData {
  children: ReactNode;
  onClick: () => void;
  className: String;
}
export default function OutlinedRoundedButton({
  children,
  onClick,
  className,
}: OutlinedRoundedButtonData) {
  return (
    <div
      className={`flex border-primary border-2 flex-row py-4 px-10 rounded-2xl gap-2 items-center justify-center hover:scale-95 transition-all duration-200 cursor-pointer ${className}`}
    >
      {children}
    </div>
  );
}
