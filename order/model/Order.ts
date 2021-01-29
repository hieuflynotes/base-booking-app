import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Customer } from "@BookingAppTypes/customer/model/Customer";
import { OrderProduct } from "./OrderProduct";
import { OrderService } from "./OrderService";

export class Order extends BaseModel {
   customerId?: string;
   customer?: Customer;

   orderProducts?: OrderProduct[];
   orderServices?: OrderService[];

   paymentMethodId?: string;
}
