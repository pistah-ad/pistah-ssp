import { AdBoardType } from "../enums/AdBoardType";

export type aAdBoard =
  | {
      boardType: AdBoardType.STATIC;
      id: number;
      boardName: string;
      location: string;
      dimensions: string;
      isAvailable: boolean;
      dailyRate: number;
      operationalHours: string;
      ownerContact: string;
      lastMaintenanceDate: Date;
      additionalNotes?: string;
    }
  | {
      boardType: AdBoardType.DIGITAL | AdBoardType.MOVING_DIGITAL;
      id: number;
      boardName: string;
      location: string;
      dimensions: string;
      isAvailable: boolean;
      dailyRate: number;
      operationalHours: string;
      ownerContact: string;
      lastMaintenanceDate: Date;
      digitalFeatures: string[];
      mobilityDetails?: string; // Only for moving digital boards
      additionalNotes?: string;
    };
