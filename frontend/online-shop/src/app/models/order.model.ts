import { Customer } from "./customer.model";
import { OrderPosition } from "./order-position.model";

export interface Order {
  id?: number;
  orderDate: Date;
  orderPositions?: OrderPosition[];
  customer?: Customer;
}
