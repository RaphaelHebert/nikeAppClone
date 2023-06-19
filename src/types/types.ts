export interface IState {
  products: IProduct[];
  selectedProduct: IProduct;
  cart: ICart;
}

export interface IProduct {
  id: string;
  image: string;
  images: string[];
  name: string;
  price: number;
  sizes: number[];
  description: string;
}

// cart
export interface ICart {
  [key: string]: ICartItem; // key is made from id and size
}
// object in cart
export interface ICartItem {
  product: Pick<IProduct, 'id' | 'image' | 'name' | 'price'>;
  size: number;
  quantity: number;
}
// object to send to cart
export type AddCartItem = Pick<ICartItem, 'product' | 'size'>;
