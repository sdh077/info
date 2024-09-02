
export interface IInfo {
  id: number;
  source: string;
  cate: string;
  type: string;
}
export interface IVideo extends IInfo {
  link: string;
  poster: string;
}

export interface ICard extends IInfo {
  title: string;
  subTitle: string;
  description: string[];
  poster: string;
}
export type IContent = IVideo | ICard;
export function isVideo(content: IContent): content is IVideo {
  return (content as IVideo).link !== undefined;
}
export function isCard(content: IContent): content is ICard {
  return (content as ICard).subTitle !== undefined;
}