import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import * as Yup from "yup";
export class Product extends BaseModel {
    name?: string =__(new _Define()
        .setYup(Yup.string().trim().required("Please enter product name!"))
    );
    desc?: string =__(new _Define()
        .setYup(Yup.string())
    );
    price?: number =__(new _Define()
        .setYup(Yup.number().min(0, "Minimum price is 0").integer("The price must be an integer!"))
    );
    images ?: string[] =__(new _Define()
        .setYup(Yup.string())
    );
    categoryId ?: string =__(new _Define()
        .setYup(Yup.string())
    );
    salePrice ?: number =__(new _Define()
        .setYup(Yup.number())
    );
}