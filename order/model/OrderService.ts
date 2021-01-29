import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Service } from "@BookingAppTypes/product/model/Service";
import { User } from "@BookingAppTypes/user/model/User";

export class OrderService extends BaseModel {
   serviceId?: string;
   service?: Service;
   price?: number;
   duration?: number;
   
   userId?: string;
   user?: User;

   quantity?: number;
   startTime?: number;

   
   orderId?: string;
}
