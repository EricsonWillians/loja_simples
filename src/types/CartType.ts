import IProduct from "./ProductType";

interface ICart {
  id: string;
  userId: string;
  date: string;
  products: IProduct[];
}

export default ICart;
