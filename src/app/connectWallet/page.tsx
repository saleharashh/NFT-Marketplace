type WalletList = {
  name: string;
  imageAddress: string;
};

const ConnectWallet = () => {
  const items: WalletList[] = [
    { name: "Metamask", imageAddress: "images/Metamask.png" },
    { name: "wallet", imageAddress: "images/Wallet.png" },
    { name: "Coinbase", imageAddress: "images/Coinbase.png" },
  ];
  return (
    <div className="flex flex-col gap-4 md:flex-row items-stretch">
      <div className="w-full h-max">
        <img src="images/UFO.png" alt="" />
      </div>
      <div className="h-full w-full flex  items-start justify-center">
        <div className="flex flex-col gap-4 justify-center items-center">
          <h1 className="text-4xl font-bold">Connect Wallet</h1>
          <p>
            Choose a wallet u want to connect.
            <br />
            There are several wallet providers.
          </p>
          {items.map((item, index) => (
            <div key={index} className="flex flex-row  gap-6 border border-primary py-4 px-8 items-center rounded-2xl bg-secondary-background">
              <img src={item.imageAddress} className="w-10 h-10" alt="" />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ConnectWallet;
