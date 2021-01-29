import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Service } from "@BookingAppTypes/product/model/Service";
import { User } from "../../user/model/User";

export class Company extends BaseModel {
     name ?: string;
     address ?: string;
     phone ?: string;
     email ?: string;
}