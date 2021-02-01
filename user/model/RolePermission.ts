import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import * as Yup from "yup";

export class RolePermission extends BaseModel {
  roleId ?: string  =__(new _Define()
    .setYup(Yup.string().uuid().required())
  );
  permissionId?: string  =__(new _Define()
    .setYup(Yup.string().uuid().required())
  );
}