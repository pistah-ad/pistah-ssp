import path from "path";
import { readJSON } from "../utils/fileUtils";
import { Ad, AdBoard } from "../types/ad";

const databasePath = path.join(process.cwd(), "src/database/database.json");

export const getAds = (): Ad[] => {
  const database = readJSON(databasePath);
  return database.ads;
};

export const getAdBoards = (): AdBoard[] => {
  const database = readJSON(databasePath);
  return database.adBoards;
};
