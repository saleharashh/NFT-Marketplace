import Image from "next/image";

export interface ArtistBadgeData {
  artistId: string;
  profileSrc: string;
  artistName: string;
}

export default function ArtistBadge({
  profileSrc,
  artistName,
}: ArtistBadgeData) {
  return (
    <div className="flex flex-row items-center gap-2 hover:scale-95 transition-all duration-300">
      <Image src={profileSrc} className="w-8 h-8  rounded-full" alt={""} />
      {/* <div className="w-8 h-8 bg-primary rounded-full"> </div> */}
      <p className="text-sm">{artistName}</p>
    </div>
  );
}
