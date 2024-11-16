import { NextApiRequest, NextApiResponse } from "next";
import { fetchFilteredAds } from "../../services/adService";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const { date } = req.body;

  if (!date) {
    return res.status(400).json({ error: "Date is required" });
  }

  try {
    const ads = fetchFilteredAds(date);
    res.status(200).json(ads);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
