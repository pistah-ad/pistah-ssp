import React from "react";
import { Ad } from "../types/ad";
import LinkButton from "./shared/LinkButton";
interface AdItemProps {
  ad: Ad;
}

const AdItem: React.FC<AdItemProps> = ({ ad }) => (
  <tr>
    <td className="py-2 px-4 border-b">{ad.title}</td>
    <td className="py-2 px-4 border-b">
      <LinkButton link={ad.downloadLink} />
    </td>
  </tr>
);

export default AdItem;
