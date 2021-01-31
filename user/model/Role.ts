import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { DataTypes } from "sequelize";
import * as Yup from "yup";

export class Role extends BaseModel {
  name?: string  =__(new _Define()
    .setSequelize({type : DataTypes.TEXT, allowNull : false, field : "name"})
    .setYup(Yup.string().required().trim())
  );
  companyId?:string  =__(new _Define()
    .setSequelize({type: DataTypes.UUID, allowNull: false, field : "company_id"})
    .setYup(Yup.string().uuid())
  );
}