import { Customer } from './customer.model';
export interface Adress {
  id?: number;
  customer?: Customer;
  street: string;
  houseNumber: string;
  zip: string;
  city: string;
  typ: AdressTyp;
}




export enum AdressTyp {
  BILLING = 'BILLING',
  SHIPPING = 'SHIPPING',
}
