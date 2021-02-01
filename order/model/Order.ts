import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Customer } from "@BookingAppTypes/customer/model/Customer";
import * as Yup from "yup";
import { OrderProduct } from "./OrderProduct";
import { OrderService } from "./OrderService";

export class Order extends BaseModel {
   customerId?: string = __(new _Define()
      .setYup(Yup.string().uuid())
   );
   paymentMethodId?: string = __(new _Define()
      .setYup(Yup.string().uuid())
   );
   customer?: Customer;
   orderProducts?: OrderProduct[];
   orderServices?: OrderService[];
}
