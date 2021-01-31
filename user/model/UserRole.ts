import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { DataTypes } from "sequelize";
import * as Yup from "yup";

export class UserRole extends BaseModel {
  roleId ?: string  =__(new _Define()
    .setSequelize({type: DataTypes.UUID, allowNull: false, field : "role_id"})
    .setYup(Yup.string().required().trim().uuid())
  );
  userId ?: string  =__(new _Define()
    .setSequelize({type: DataTypes.UUID, allowNull: false, field : "user_id"})
    .setYup(Yup.string().required().trim().uuid())
  );
}
