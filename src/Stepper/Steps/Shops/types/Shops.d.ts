export type TShop = {
  id: number;
  name?: string;
  address?: string;
  phone?: string;
  img?: string;
};

export interface IShopProps {
  shop: TShop;
}
