import { Adress } from "./adress.model";

export interface Customer {
  id?: number;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  birthDate: Date;
  title: Title;
  adress?: Adress
}

export enum Title {
  MR = 'Mr',
  MRS = 'Mrs',
  MISS = 'Miss',
  MS = 'Ms',
  DR = 'Dr',
  PROF = 'Prof',
}
