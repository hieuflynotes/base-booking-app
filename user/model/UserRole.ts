import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import * as Yup from "yup";

export class UserRole extends BaseModel {
  roleId ?: string  =__(new _Define()
    .setYup(Yup.string().required().trim().uuid())
  );
  userId ?: string  =__(new _Define()
    .setYup(Yup.string().required().trim().uuid())
  );
}
