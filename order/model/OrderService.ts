import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Service } from "@BookingAppTypes/product/model/Service";
import { User } from "@BookingAppTypes/user/model/User";
import * as Yup from "yup";

export class OrderService extends BaseModel {
   serviceId?: string  = __(new _Define()
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

   duration?: number = __(new _Define()
      .setYup(Yup.string().uuid())
   );
   startTime?: Date = __(new _Define()
      .setYup(Yup.date())
   );

   orderId?: string = __(new _Define()
      .setYup(Yup.string().uuid())
   );

   service?: Service;
   staff?: User;
}
