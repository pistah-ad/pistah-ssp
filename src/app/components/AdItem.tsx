import React from "react";
import { Ad } from "../types/ad";
import DownloadButton from "./DownloadButton";

interface AdItemProps {
  ad: Ad;
}

const AdItem: React.FC<AdItemProps> = ({ ad }) => (
  <tr>
    <td className="py-2 px-4 border-b">{ad.title}</td>
    <td className="py-2 px-4 border-b">
      <DownloadButton downloadLink={ad.downloadLink} />
    </td>
  </tr>
);

export default AdItem;
