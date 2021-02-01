import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import * as Yup from "yup";

export class Permission extends BaseModel {
  name?: string =__(new _Define()
    .setYup(Yup.string().required().trim())
  );
  desc ?: string  =__(new _Define()
    .setYup(Yup.string())
  );
  key ?: string =__(new _Define()
    .setYup(Yup.string().required().trim())
  );
}