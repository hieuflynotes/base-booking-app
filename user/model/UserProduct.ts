import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { DataTypes } from "sequelize";
import * as Yup from "yup";
export class UserProduct extends BaseModel {
   userId  ?: string  =__(new _Define()
      .setSequelize({type: DataTypes.UUID, allowNull: false, field : "user_id"})
      .setYup(Yup.string().required().trim().uuid())
   );
   productId ?: string  =__(new _Define()
      .setSequelize({type: DataTypes.UUID, allowNull: false, field : "product_id"})
      .setYup(Yup.string().required().trim().uuid())
   );
}