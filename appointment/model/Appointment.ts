import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Customer } from "@BookingAppTypes/customer/model/Customer";
import { Order } from "@BookingAppTypes/order/model/Order";
import { User } from "@BookingAppTypes/user/model/User";

export class Appointment extends BaseModel {
   companyId?: string;

   fromAt?: Date;
   toAt?: Date;

   customerId?: string;
   customer?: Customer;

   userId?: string;
   user?: User;

   orderId?: string;
   order?: Order;
}
