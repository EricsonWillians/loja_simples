interface IProductRating {
  rate: number;
  count: number;
}

interface IProduct {
  category: string;
  description: string;
  id: string;
  image: string;
  price: number;
  rating: IProductRating;
  title: string;
}

export interface IProductForUpdate {
  productId: string;
  quantity: number;
}

export default IProduct;
