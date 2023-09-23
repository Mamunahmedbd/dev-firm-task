import React from "react";
import capitalizeFirstLetters from "@/components/utils/first-letter-cap";

interface StatusBadgeProps {
  status: "paid" | "unpaid" | "cancelled";
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  let badgeClasses = "inline-block py-1 px-2 rounded-full";

  switch (status) {
    case "paid":
      badgeClasses += " bg-green-400 text-white";
      break;
    case "unpaid":
      badgeClasses += " bg-yellow-400 text-gray-800";
      break;
    case "cancelled":
      badgeClasses += " bg-red-400 text-white";
      break;
    default:
      badgeClasses += " bg-gray-400 text-gray-800";
  }

  return (
    <div className="text-center">
      <span className={badgeClasses}>{capitalizeFirstLetters(status)}</span>
    </div>
  );
};

export default StatusBadge;
