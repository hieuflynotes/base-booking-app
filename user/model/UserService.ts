import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Service } from "@BookingAppTypes/product/model/Service";
import { User } from "./User";

export class UserService extends BaseModel {
     userId?: string;
     user?: User;
     serviceId?: string;
     service?: Service;
}