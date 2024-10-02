export interface INaviType {
  type: string;
  title: string;
}
export interface INavi {
  id: number;
  menu: string;
  cate: string[];
  types: INaviType[];
}