import React from "react";
import { Ad } from "../types/ad";
import AdItem from "./AdItem";

interface AdListProps {
  ads: Ad[];
}

const AdList: React.FC<AdListProps> = ({ ads }) => (
  <table className="min-w-full bg-white border">
    <thead className="bg-gray-200">
      <tr>
        <th className="py-2 px-4 border-b text-left">Ad Title</th>
        <th className="py-2 px-4 border-b text-left">Download</th>
      </tr>
    </thead>
    <tbody>
      {ads.map((ad) => (
        <AdItem key={ad.id} ad={ad} />
      ))}
    </tbody>
  </table>
);

export default AdList;
