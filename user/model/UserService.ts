import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Service } from "@BookingAppTypes/product/model/Service";
import * as Yup from "yup";
import { User } from "./User";

export class UserService extends BaseModel {
     userId?: string  =__(new _Define()
          .setYup(Yup.string().required().trim().uuid())
     );
     serviceId?: string  =__(new _Define()
          .setYup(Yup.string().required().trim().uuid())
     );
     user?: User;
     service?: Service;
}