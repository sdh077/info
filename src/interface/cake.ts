
export interface ICake {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  price: number;
  recommend: boolean;
  shop: IShop;
}
export interface IShop {
  id: number;
  title: string;
  profile: string;
}
