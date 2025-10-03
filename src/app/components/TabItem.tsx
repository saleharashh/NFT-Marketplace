export interface TabItemType {
  index: number;
  isSelected: boolean;
  title: string;
  onClick: (index: number) => void;
}

export default function TabItem({
  index,
  isSelected,
  title,
  onClick,
}: TabItemType) {
  return (
    <li
      className={isSelected ? `border-b-2 border-secondary-text p-5` : `p-5`}
      onClick={() => onClick(index)}
    >
      {title}
    </li>
  );
}
