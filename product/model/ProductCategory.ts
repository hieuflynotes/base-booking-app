import { BaseModel } from "@BaseTypes/model/BaseModel";

export class ProductCategory extends BaseModel {
    name ?: string;
    desc ?: string;
    images?: string;
    parentId ?: string;
}