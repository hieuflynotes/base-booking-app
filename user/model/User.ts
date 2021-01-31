import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Gender } from "@BookingAppTypes/customer/model/Customer";
import { DataTypes } from "sequelize";
import * as Yup from "yup";
export class User extends BaseModel {
   username?: string  =__(new _Define()
      .setSequelize({type: DataTypes.STRING, allowNull: false, field : "username"})
      .setYup(Yup.string().required().trim())
   );
   password?: string  =__(new _Define()
      .setSequelize({type: DataTypes.STRING, allowNull: false, field : "password"})
      .setYup(Yup.string().required().trim())
   );
   name?: string  =__(new _Define()
      .setSequelize({type : DataTypes.STRING})
      .setYup(Yup.string().trim().required("This field is not valid"))
   );
   gender?: string  =__(new _Define()
      .setSequelize({type: DataTypes.STRING, allowNull: false, field : "gender"})
      .setYup(Yup.string().default(Gender.Female))
   );
   phone?: string  =__(new _Define()
      .setSequelize({type: DataTypes.STRING, allowNull: false, field : "phone"})
      .setYup(Yup.string().trim().required("This field is not valid").matches(
         /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
         "Please enter the phone number"))
   );
   email?: string  =__(new _Define()
      .setSequelize( {type: DataTypes.STRING, allowNull: false, field : "email"})
      .setYup(Yup.string().trim().email("This field is not valid"))
   );
}
