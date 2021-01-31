import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { DataTypes } from "sequelize";
import * as Yup from "yup";
export class Company extends BaseModel {
     name ?: string = __(new _Define()
          .setSequelize({type : DataTypes.STRING, allowNull : false, field : "name"})
          .setYup(Yup.string().required().trim())
     );
     address ?: string = __(new _Define()
          .setSequelize({type : DataTypes.TEXT, allowNull : false, field : "address"})
          .setYup(Yup.string().required().trim())
     );
     phone ?: string = __(new _Define()
          .setSequelize({type : DataTypes.STRING, allowNull : false, field : "phone"})
          .setYup(Yup.string().required().trim())
     );
     email ?: string = __(new _Define()
          .setSequelize({type : DataTypes.STRING, allowNull : false, field : "email"})
          .setYup(Yup.string().email().required().trim())
     );
}


