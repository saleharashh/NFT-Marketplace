import FilledRoundedButton from "@/app/components/FilledRoundedButton";
import Link from "next/link";

const NFTLoadingSkeleton = () => {
  return (
    <div className="flex flex-col animate-pulse">
      <div className=" min-h-64 max-h-134 max-w-full w-full bg-secondary-background" />
      <div className="flex flex-col p-10 gap-4 md:px-20 lg:px-40 2xl:px-100">
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col md:w-1/2 gap-4">
            <h1 className="font-bold text-secondary-background bg-secondary-background">
              Dreamscape
            </h1>
            <p className="mb-5 md:mb-0 text-secondary-background bg-secondary-background">
              Minted on Sep 30, 2022
            </p>

            <div className="hidden md:flex flex-col gap-4 mt-10 ">
              <p className="text-secondary-background bg-secondary-background">
                Created By
              </p>
              <Link
                href={`/artist/`}
                className="flex flex-row gap-4 items-center hover:scale-95 transition-all duration-200 cursor-pointer"
              >
                <div className="w-6 h-6 text-secondary-background bg-secondary-background rounded-full" />
                <p className=" text-secondary-background bg-secondary-background rounded-full">
                  Alice Doe
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col rounded-2xl w-full md:w-1/2 text-secondary-background bg-secondary-background p-6"></div>
        </div>
        <div className="flex flex-col gap-4 md:hidden">
          <p className="text-secondary-background bg-secondary-background">
            Created By
          </p>
          <div className="flex flex-row gap-4 items-center hover:scale-110 transition-all duration-200 cursor-pointer">
            <div className="w-6 h-6 text-secondary-background bg-secondary-background rounded-full" />
            <p>Alice Doe</p>
          </div>
        </div>
        <p className=" text-secondary-background bg-secondary-background">
          Description
        </p>
        <p className="text-secondary-background bg-secondary-background">
          A surreal digital landscape blending reality and imagination.
        </p>
      </div>
    </div>
  );
};

export default NFTLoadingSkeleton;
