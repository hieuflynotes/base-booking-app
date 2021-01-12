import { BaseModel } from "@BaseTypes/model/BaseModel";

export class Product extends BaseModel {
    name?: string;
    desc?: string;
    price?: number;
    quantity?: number
}