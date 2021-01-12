import { BaseModel } from "@BaseTypes/model/BaseModel";

export class Customer extends BaseModel {
   name?: string
   phone?: string
   image?: string
   email?: string
   gender?: string
   note?: string
}