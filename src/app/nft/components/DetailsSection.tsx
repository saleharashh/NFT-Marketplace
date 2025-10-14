import { Globe } from "lucide-react";

const DetailSections = () => {
  return (
    <div>
      <p className="text-secondary-text">Details</p>

      <div className="flex flex-row gap-3">
        <Globe />
        <p>View on Etherscan</p>
      </div>
      <div className="flex flex-row gap-3">
        <Globe />
        <p>View Orginal</p>
      </div>
    </div>
  );
};

export default DetailSections;
