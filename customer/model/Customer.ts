import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { DataTypes } from "sequelize";
import * as Yup from "yup";
export class Customer extends BaseModel {
   name?: string = __(new _Define()
      .setSequelize({type : DataTypes.STRING, allowNull : false,field : "name"})
      .setYup(Yup.string().required("Pleas typing the name").max(10, "Tying it's it's thought!").trim())
   );
   phone?: string = __(new _Define()
      .setSequelize({type : DataTypes.STRING(15), allowNull : true,field : "phone"})
      .setYup(Yup.string().trim().required("This field is no valid").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g,"Please enter the phone number"))
   );
   image?: string = __(new _Define()
      .setSequelize( {type : DataTypes.TEXT, allowNull : true,field : "image"})
      .setYup(Yup.string())
   );
   email?: string = __(new _Define()
      .setSequelize({type : DataTypes.STRING, allowNull : true,field : "email"})
      .setYup(Yup.string().trim().lowercase().email("Please enter the email"))
   );
   gender?: string = __(new _Define()
      .setSequelize({type : DataTypes.ENUM(Gender.Female,Gender.Male), allowNull : true,field : "gender", defaultValue : Gender.Male})
      .setYup(Yup.string().default(Gender.Female))
   );
   birthday?: Date = __(new _Define()
      .setSequelize({type : DataTypes.DATE, allowNull : true,field : "birthday"})
      .setYup(Yup.date())
   );
   address?: string = __(new _Define()
      .setSequelize({type : DataTypes.TEXT, allowNull : true,field : "address"})
      .setYup(Yup.string().required().trim())
   );
   companyId?: string = __(new _Define()
      .setSequelize({type : DataTypes.UUID, allowNull : true,field : "company_id"})
      .setYup(Yup.string().uuid())
   );
   note?: string = __(new _Define()
      .setSequelize({type : DataTypes.STRING, allowNull : false, field : "note"})
      .setYup(Yup.string())
   );
}

export enum  Gender{
   Female = "FEMALE",
   Male = "MALE"
}
