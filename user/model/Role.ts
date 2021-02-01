import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import * as Yup from "yup";

export class Role extends BaseModel {
  name?: string  =__(new _Define()
    .setYup(Yup.string().required().trim())
  );
  companyId?:string  =__(new _Define()
    .setYup(Yup.string().uuid())
  );
}