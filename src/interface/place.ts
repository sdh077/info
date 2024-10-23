import { IInfo } from "./info";

export interface IPlace extends IInfo {
  images: string[];
  title: string;
  subTitle: string;
  sns?: string;
  snsLink?: string;
  location: string;
  timetable: string;
  description: string[];
  placeLink: string;
  categories: string[];
  position: { px: number; py: number }
}
