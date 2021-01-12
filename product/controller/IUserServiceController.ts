import { IBaseController } from "@BaseTypes/controller/IBaseController";
import { UserService } from "@BookingAppTypes/user/model/UserService";
import { Service } from "../model/Service";

export interface IUserServiceController extends IBaseController<Service> {
   getByUser(userId: string): Promise<UserService[]>
}
