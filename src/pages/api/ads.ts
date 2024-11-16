// pages/api/ads.ts

import { NextApiRequest, NextApiResponse } from "next";
import { Ad } from "../../app/types/ad";

export default (_: NextApiRequest, res: NextApiResponse) => {
  const ads: Ad[] = [
    {
      id: 1,
      title: "Summer Sale Promo",
      downloadLink:
        "https://drive.google.com/file/d/1HaRREfyGlks28fUJ2IevKRuwq6j0B4E5/view?usp=sharing",
    },
    {
      id: 2,
      title: "New Product Launch",
      downloadLink:
        "https://drive.google.com/file/d/1HaRREfyGlks28fUJ2IevKRuwq6j0B4E5/view?usp=sharing",
    },
    {
      id: 3,
      title: "Holiday Discount Offer",
      downloadLink:
        "https://drive.google.com/file/d/1HaRREfyGlks28fUJ2IevKRuwq6j0B4E5/view?usp=sharing",
    },
    {
      id: 4,
      title: "Holiday Discount Offer 2",
      downloadLink:
        "https://drive.google.com/file/d/1HaRREfyGlks28fUJ2IevKRuwq6j0B4E5/view?usp=sharing",
    },
  ];

  res.status(200).json(ads);
};
