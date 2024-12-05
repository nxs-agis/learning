import { CartType } from "./CartType";

type CustomeTypes = {
  name: string;
  email: string;
  street: string;
  "postal-code": string;
  city: string;
};

export type OrderTypes = {
  items: CartType[];
  customer: CustomeTypes;
};
