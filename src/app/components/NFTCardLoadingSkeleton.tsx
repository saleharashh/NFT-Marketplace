const NFTCardLoadingSkeleton = () => {
  return (
    <div className="max-w-md w-full rounded-2xl bg-secondary-background flex flex-col hover:scale-95 transition-all duration-200 cursor-pointer">
      <div className="bg-secondary-background hover:bg-white h-64 object-cover rounded-t-2xl min-w-sm" />
      <div className="p-6 ">
        <h1 className="text-xl font-bold text-secondary-background bg-secondary-background">
          Space Walking
        </h1>
        <div className="flex flex-row items-center gap-2">
          <div
            className="w-8 h-8  rounded-full text-secondary-background bg-secondary-background"
            />
          {/* <div className="w-8 h-8 bg-primary rounded-full"> </div> */}
          <p className="text-sm text-secondary-background bg-secondary-background">anima kid</p>
        </div>
        <div className="mt-3 flex flex-row justify-between items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-secondary-background bg-secondary-background">Price</h1>
            <p className="text-secondary-background bg-secondary-background">3 ETH</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-secondary-background bg-secondary-background">Highest Bid</h1>
            <p className="text-secondary-background bg-secondary-background">2.5 wETH</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCardLoadingSkeleton;
