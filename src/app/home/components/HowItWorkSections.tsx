import Image from "next/image";

export default function HowItWorkSections() {
  const array: number[] = [1, 2, 3];
  return (
    <div className="mt-4 flex flex-col ">
      <h1 className="text-2xl font-bold">How It Works</h1>
      <p>Find Out How To Get Started</p>
      <div
        className="flex flex-col md:flex-row justify-between gap-4
       mt-8"
      >
        {array.map((i) => (
          <div key={i} className="rounded-2xl bg-secondary-background max-w-md w-full">
            <div className="flex flex-row md:flex-col p-4 items-center gap-4" >
              <Image
                src=""
                alt=""
                className=" w-36 h-36  rounded-full  bg-primary"
              />
              <div className="flex flex-col md:items-center w-8/12 gap-2">
                <h1 className="font-bold md:text-center md:text-sm">Setup Your Wallet</h1>
                <p className="text-xs md:text-center font-thin">
                  Set up your Wallet of choice. Connect it to the Animarkey by
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
