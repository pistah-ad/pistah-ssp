import { updateAdBoard } from "@/services/adBoardService";
import { getLoggedInUser } from "@/services/userService";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const user = await getLoggedInUser(req);
  if (req.method === "PUT") {
    // Update the ad board
    try {
      const response = await updateAdBoard(req.body.adBoard, user);
      return res.status(200).json(response);
    } catch (error) {
      console.error("Error updating ad board:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.setHeader("Allow", ["PUT"]);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
