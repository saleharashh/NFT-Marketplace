export interface HeroStaticsItemType {
  stat: string;
  title: string;
}

export default function HeroStaticsItem({ stat, title }: HeroStaticsItemType) {
  return (
    <div className="flex flex-col gap-1">
      <p className="font-bold">{stat}</p>
      <p className="text-sm">{title}</p>
    </div>
  );
}
