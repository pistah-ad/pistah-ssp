import { getAds, getAdBoards } from "../repositories/adRepository";

export const fetchFilteredAds = (date: string) => {
  const ads = getAds();
  const adBoards = getAdBoards();
  const requestedDate = new Date(date);

  const filteredAds = ads.filter(
    (ad) =>
      requestedDate >= new Date(ad.adDisplayStartDate) &&
      requestedDate <= new Date(ad.adDisplayEndDate)
  );

  return filteredAds.map((ad) => {
    const adBoard = adBoards.find((board) => board.id === ad.adBoardId);
    return { ...ad, adBoard: adBoard || undefined };
  });
};
