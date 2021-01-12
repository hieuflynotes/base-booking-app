import { BaseModel } from "@BaseTypes/model/BaseModel";

export class UserProduct extends BaseModel {
   userId  ?: string;
   productId ?: string;
}