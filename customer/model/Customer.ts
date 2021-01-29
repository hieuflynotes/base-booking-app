import { BaseModel } from "@BaseTypes/model/BaseModel";

export class Customer extends BaseModel {
   name?: string;
   phone?: string;
   image?: string;
   email?: string;
   gender?: string;
   birthday?: Date;
   address?: string;
   companyId?: string;
   note?: string;
}
