export interface INaviType {
  type: string;
  title: string;
}
export interface INavi {
  menu: string;
  cate: string;
  types: INaviType[];
}