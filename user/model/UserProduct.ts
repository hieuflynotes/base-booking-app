import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import * as Yup from "yup";
export class UserProduct extends BaseModel {
   userId  ?: string  =__(new _Define()
      .setYup(Yup.string().required().trim().uuid())
   );
   productId ?: string  =__(new _Define()
      .setYup(Yup.string().required().trim().uuid())
   );
}