import { BaseModel } from "@BaseTypes/model/BaseModel";

export class Product extends BaseModel {
    name?: string;
    desc?: string;
    price?: number;
    images ?: string;
    categoryId ?: string;
    salePrice ?: number;
}