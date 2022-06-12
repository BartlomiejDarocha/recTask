export interface Product {
  id?: number;
  name: string;
  desc: string;
  imgUrl: string;
  type: 'namioty' | 'kurtki' | 'buty'| '';
  price: productsPrice[];
  showMore?: boolean;
}

export interface productsPrice {
  variant: string;
  value: number;
}