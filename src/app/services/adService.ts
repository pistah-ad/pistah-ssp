import { Ad } from "../types/ad";

export const fetchAds = async (): Promise<Ad[]> => {
  const response = await fetch("/api/ads");

  if (!response.ok) {
    throw new Error("Failed to fetch ads");
  }

  const data: Ad[] = await response.json();
  return data;
};
