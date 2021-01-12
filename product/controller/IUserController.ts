import { IBaseController } from "@BaseTypes/controller/IBaseController";
import { User } from "@BookingAppTypes/user/model/User";
import { Service } from "../model/Service";

export interface IUserController extends IBaseController<Service> {
   login(username: string, password: string):Promise<LoginResp>;
   register(user:User):Promise<void>;
   me(): Promise<User>;
}

export interface LoginResp {
   jwt: string;
}