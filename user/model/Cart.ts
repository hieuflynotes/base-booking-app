import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Customer } from "@BookingAppTypes/customer/model/Customer";
import { Product } from "@BookingAppTypes/product/model/Product";
import { Service } from "@BookingAppTypes/product/model/Service";

export class Cart extends BaseModel {
   customerId?: string;
   customer?: Customer;
   productIds?: string[];
   products?: Product[];
   serviceIds?: string[];
   services?: Service[];
}