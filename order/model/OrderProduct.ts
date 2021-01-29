import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Product } from "@BookingAppTypes/product/model/Product";
import { User } from "@BookingAppTypes/user/model/User";

export class OrderProduct extends BaseModel {
   product?: Product;
   productId?: string;
   price?: number;
   quantity?: number;

   user?: User;
   userId?: string;

   orderId?: string;
}
