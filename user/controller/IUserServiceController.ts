import { IBaseController } from "@BaseTypes/controller/IBaseController";
import { UserService } from "../model/UserService";

export interface IUserServiceController extends IBaseController<UserService> {
   getByUser(userId: string): Promise<UserService[]>
}

