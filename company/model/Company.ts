import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import * as Yup from "yup";
export class Company extends BaseModel {
     name ?: string = __(new _Define()
          .setYup(Yup.string().required().trim())
     );
     address ?: string = __(new _Define()
          .setYup(Yup.string().required().trim())
     );
     phone ?: string = __(new _Define()
          .setYup(Yup.string().required().trim())
     );
     email ?: string = __(new _Define()
          .setYup(Yup.string().email().required().trim())
     );
}


