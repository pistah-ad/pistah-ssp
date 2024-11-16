import React from "react";
import { Ad } from "../types/ad";
import LinkButton from "./shared/LinkButton";

interface AdItemProps {
  ad: Ad;
}

const AdItem: React.FC<AdItemProps> = ({ ad }) => (
  <tr className="hover:bg-gray-100 dark:hover:bg-gray-700">
    <td className="py-2 px-4 border-b text-gray-700 dark:text-gray-300">
      {ad.title}
    </td>
    <td className="py-2 px-4 border-b">
      <LinkButton link={ad.downloadLink} />
    </td>
  </tr>
);

export default AdItem;
