import Link from "next/link";

export default function BrowseCategorySection() {
  const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <div className="mt-5 flex flex-col gap-2">
        <h1 className="text-3xl">Browse Categories</h1>
        <div className="mt-5 grid grid-cols-2 md:grid-cols-4 gap-4">
          {array.map((i) => (
            <Link key={i} href={"/marketplace"}>
              <div className="rounded-xl overflow-hidden bg-secondary-background">
                <div className="relative">
                  <img
                    src="art.jpg"
                    alt="Art"
                    className="w-full h-28 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4h16v16H4z"
                      />
                    </svg>
                  </div>
                </div>
                <div className="p-3 text-center text-white text-sm font-medium">
                  Art
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
