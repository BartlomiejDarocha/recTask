export interface Product {
  id?: number;
  name: string;
  desc: string;
  imgUrl: string;
  type: 'tent' | 'jacket' | 'boots'
  price: productsPrice[];
}

export interface productsPrice {
  variant: string;
  value: number;
}