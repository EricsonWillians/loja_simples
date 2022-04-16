import IProduct from "./ProductType";

interface IProductCard {
  product: IProduct;
  isLoading: boolean;
  isDetailed: boolean;
}

export default IProductCard;
