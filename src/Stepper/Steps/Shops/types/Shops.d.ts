export type TShop = {
  id: number;
  name: string;
  address: string;
  phone: string;
  img?: number | string;
};

export interface IShopProps {
  shop: TShop;
}
