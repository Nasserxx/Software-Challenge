import { Order } from "./order.model";
import { Product } from "./product.model";

export interface OrderPosition {
  id?: number;
  quantity: number;
  product: Product;
  order?: Order;
}
