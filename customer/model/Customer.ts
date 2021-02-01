import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import * as Yup from "yup";
export class Customer extends BaseModel {
   name?: string = __(new _Define()
      .setYup(Yup.string().required("Pleas typing the name").max(10, "Tying it's it's thought!").trim())
   );
   phone?: string = __(new _Define()
      .setYup(Yup.string().trim().required("This field is no valid").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g,"Please enter the phone number"))
   );
   image?: string = __(new _Define()
      .setYup(Yup.string())
   );
   email?: string = __(new _Define()
      .setYup(Yup.string().trim().lowercase().email("Please enter the email"))
   );
   gender?: string = __(new _Define()
      .setYup(Yup.string().default(Gender.Female))
   );
   birthday?: Date = __(new _Define()
      .setYup(Yup.date())
   );
   address?: string = __(new _Define()
      .setYup(Yup.string().required().trim())
   );
   companyId?: string = __(new _Define()
      .setYup(Yup.string().uuid())
   );
   note?: string = __(new _Define()
      .setYup(Yup.string())
   );
}

export enum  Gender{
   Female = "FEMALE",
   Male = "MALE"
}
