import { IBaseController } from "@BaseTypes/controller/IBaseController";
import { Service } from "../../product/model/Service";
import { User } from "../model/User";

export interface IUserController extends IBaseController<Service> {
   login(username: string, password: string):Promise<LoginResp>;
   register(user:User):Promise<void>;
   me(): Promise<User>;
}

export interface LoginResp {
   jwt: string;
}