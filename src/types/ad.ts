export interface Ad {
  id: number;
  title: string;
  downloadLink: string;
  adBoardId: number;
  adDisplayStartDate: string;
  adDisplayEndDate: string;
  adDuration: string;
}

export interface AdBoard {
  id: number;
  boardName: string;
  location: string;
  dimensions: string;
  boardType: string;
  isAvailable: boolean;
  dailyRate: number;
  operationalHours: string;
  ownerContact: string;
  lastMaintenanceDate: string;
}

export interface AdWithBoard extends Ad {
  adBoard?: AdBoard | null;
}
