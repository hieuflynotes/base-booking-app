import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { DataTypes } from "sequelize";
import * as Yup from "yup";import { Service } from "@BookingAppTypes/product/model/Service";
import { User } from "./User";

export class UserService extends BaseModel {
     userId?: string  =__(new _Define()
          .setSequelize({type: DataTypes.UUID, allowNull: false, field : "user_id"})
          .setYup(Yup.string().required().trim().uuid())
     );
     serviceId?: string  =__(new _Define()
          .setSequelize({type: DataTypes.UUID, allowNull: false, field : "service_id"})
          .setYup(Yup.string().required().trim().uuid())
     );
     user?: User;
     service?: Service;
}