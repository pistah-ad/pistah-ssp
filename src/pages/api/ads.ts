// pages/api/ads.ts

import { NextApiRequest, NextApiResponse } from "next";
import { Ad } from "../../app/types/ad";

export default (_: NextApiRequest, res: NextApiResponse) => {
  const ads: Ad[] = [
    { id: 1, title: "Summer Sale Promo", downloadLink: "/downloads/ad1.pdf" },
    { id: 2, title: "New Product Launch", downloadLink: "/downloads/ad2.pdf" },
    {
      id: 3,
      title: "Holiday Discount Offer",
      downloadLink: "/downloads/ad3.pdf",
    },
    {
      id: 4,
      title: "Holiday Discount Offer 2",
      downloadLink: "/downloads/ad3.pdf",
    },
  ];

  res.status(200).json(ads);
};
