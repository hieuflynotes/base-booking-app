import { BaseModel } from "@BaseTypes/model/BaseModel";

export class ServiceCategory extends BaseModel {
    name ?: string;
    desc ?: string;
    images?: string;
    parentId ?: string;
}