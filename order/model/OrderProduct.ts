import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { DataTypes } from "sequelize";
import * as Yup from "yup";
import { Product } from "@BookingAppTypes/product/model/Product";
import { User } from "@BookingAppTypes/user/model/User";

export class OrderProduct extends BaseModel {
   productId?: string  = __(new _Define()
      .setSequelize({type : DataTypes.UUID, allowNull : false, field : "product_id"})
      .setYup(Yup.string().uuid())
   );
	price?: number = __(new _Define()
      .setSequelize({type : DataTypes.INTEGER, allowNull : false, field : "price"})
      .setYup(Yup.number())
   );
	quantity?: number = __(new _Define()
      .setSequelize({type : DataTypes.INTEGER, allowNull : false, field : "quantity"})
      .setYup(Yup.number())
   );
   userId?: string = __(new _Define()
      .setSequelize({type : DataTypes.UUID, allowNull : false, field : "user_id"})
      .setYup(Yup.string().uuid())
   );
   orderId?: string = __(new _Define()
      .setSequelize({type : DataTypes.UUID, allowNull : false, field : "order_id"})
      .setYup(Yup.string().uuid())
   );
   user?: User;
	product?: Product;
}
