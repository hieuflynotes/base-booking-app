import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { DataTypes } from "sequelize";
import * as Yup from "yup";
export class Product extends BaseModel {
    name?: string =__(new _Define()
        .setSequelize({type : DataTypes.STRING, allowNull : false, field :"name"})
        .setYup(Yup.string().trim().required("Please enter product name!"))
    );
    desc?: string =__(new _Define()
        .setSequelize({type : DataTypes.TEXT, allowNull : false, field :"desc"})
        .setYup(Yup.string())
    );
    price?: number =__(new _Define()
        .setSequelize({type : DataTypes.INTEGER, allowNull : false, field :"price"})
        .setYup(Yup.number().min(0, "Minimum price is 0").integer("The price must be an integer!"))
    );
    images ?: string[] =__(new _Define()
        .setSequelize({type : DataTypes.TEXT, allowNull : false, field :"images"})
        .setYup(Yup.string())
    );
    categoryId ?: string =__(new _Define()
        .setSequelize({type : DataTypes.UUID, allowNull : false, field :"category_id"})
        .setYup(Yup.string())
    );
    salePrice ?: number =__(new _Define()
        .setSequelize({type : DataTypes.INTEGER, allowNull : false, field :"sale_price"})
        .setYup(Yup.number())
    );
}