export interface ArtistStatItemType {
  title: string;
  value: string;
}

export default function ArtistStatItem({ title, value }: ArtistStatItemType) {
  return (
    <div className="flex flex-col items-start">
      <h1 className="text-2xl font-bold">{value}</h1>
      <p className="text-sm font-thin">{title}</p>
    </div>
  );
}
