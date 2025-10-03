export interface NFT {
  name: string;
  price: string;
  highestBid: string;
  artistName: string;
}

export default function NFTCard() {
  return (
    <div className="max-w-md w-full rounded-2xl bg-secondary-background flex flex-col">
      <img
        src=""
        alt="qwe"
        className="bg-primary h-64 object-cover rounded-t-2xl"
      />
      <div className="p-6">
        <h1 className="text-xl font-bold text-white">Distant Galaxy</h1>
        <div className="flex flex-row items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-full"> </div>
          <p className="text-sm">MoonDancer</p>
        </div>
        <div className="mt-3 flex flex-row justify-between items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-secondary-text">Price</h1>
            <p>1.63 ETH</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-secondary-text">Highest Bid</h1>
            <p>0.33 wETH</p>
          </div>
        </div>
      </div>
    </div>
  );
}
