import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { DataTypes } from "sequelize";
import * as Yup from "yup";
export class ServiceCategory extends BaseModel {
    name ?: string  =__(new _Define()
        .setSequelize({type : DataTypes.STRING, allowNull : false, field :"name"})
        .setYup(Yup.string().required().trim())
    );
    desc ?: string  =__(new _Define()
        .setSequelize({type : DataTypes.TEXT, allowNull : false, field :"desc"})
        .setYup(Yup.string())
    );
    images?: string =__(new _Define()
        .setSequelize({type : DataTypes.TEXT, allowNull : false, field :"images"})
        .setYup(Yup.string())
    );
    parentId ?: string =__(new _Define()
        .setSequelize({type : DataTypes.UUID, allowNull : false, field :"parent_id"})
        .setYup(Yup.string().uuid())
    );
}