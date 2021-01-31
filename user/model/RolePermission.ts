import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { DataTypes } from "sequelize";
import * as Yup from "yup";

export class RolePermission extends BaseModel {
  roleId ?: string  =__(new _Define()
    .setSequelize({type: DataTypes.UUID, allowNull: false, field : "role_id"})
    .setYup(Yup.string().uuid().required())
  );
  permissionId?: string  =__(new _Define()
    .setSequelize( {type: DataTypes.UUID, allowNull: false, field : "permission_id"})
    .setYup(Yup.string().uuid().required())
  );
}