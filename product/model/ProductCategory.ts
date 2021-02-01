import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import * as Yup from "yup";
export class ProductCategory extends BaseModel {
    name ?: string  =__(new _Define()
        .setYup(Yup.string().required().trim())
    );
    desc ?: string  =__(new _Define()
        .setYup(Yup.string())
    );
    images?: string  =__(new _Define()
        .setYup(Yup.string())
    );
    parentId ?: string  =__(new _Define()
        .setYup(Yup.string().uuid())
    );
}