import { IBaseController } from "../../../base/controller/IBaseController";
import { User } from "../model/User";

export interface IUserController extends IBaseController<User> {
  me(): Promise<User>;
}
