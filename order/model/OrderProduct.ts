import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Product } from "@BookingAppTypes/product/model/Product";
import { User } from "@BookingAppTypes/user/model/User";
import * as Yup from "yup";

export class OrderProduct extends BaseModel {
   productId?: string  = __(new _Define()
      .setYup(Yup.string().uuid())
   );
	salePrice?: number = __(new _Define()
      .setYup(Yup.number())
   );
	quantity?: number = __(new _Define()
      .setYup(Yup.number())
   );
   staffId?: string = __(new _Define()
      .setYup(Yup.string().uuid())
   );

   orderId?: string = __(new _Define()
      .setYup(Yup.string().uuid())
   );

   staff?: User;
	product?: Product;
}
