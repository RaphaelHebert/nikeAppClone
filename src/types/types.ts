export interface IProduct {
  id: string;
  image: string;
  images: string[];
  name: string;
  price: number;
  sizes: number[];
  description: string;
}

export interface ICartItem {
  product: Pick<IProduct, 'id' | 'image' | 'name' | 'price'>;
  size: number;
  quantity: number;
}
