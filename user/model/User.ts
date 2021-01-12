import { BaseModel } from "@BaseTypes/model/BaseModel";

export class User extends BaseModel {
   username?: string;
   password?: string;
   name?: string;
   gender?: string;
   phone?: string;
   email?: string;
}