import Link from "next/link";

export default function TrendingCollectionItem() {
  return (
    <Link href={"/nft"}>
      <div className="max-w-smx rounded-2xl overflow-hidden bg-gray-900">
        {/* <!-- Top big image --> */}
        <img
          src=""
          alt="Big"
          className="w-full aspect-square object-cover bg-primary rounded-2xl"
        />

        {/* <!-- Bottom grid of 3 --> */}
        <div className="grid grid-cols-3 gap-2 p-2  ">
          {/* <!-- Small image 1 --> */}
          <img
            src=""
            alt="Small 1"
            className="aspect-square object-cover rounded-lg bg-primary"
          />

          {/* <!-- Small image 2 --> */}
          <div className="aspect-square object-cover rounded-lg bg-primary" />

          {/* <!-- Box with text --> */}
          <div className="aspect-square rounded-lg bg-purple-500 flex items-center justify-center text-white text-xl font-bold bg-primary">
            1025+
          </div>
        </div>
      </div>
    </Link>
  );
}
