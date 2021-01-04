import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Role } from "./Role";

export class Permission extends BaseModel {
  name: string;
  desc: string;
  roleId : string;
  role ?: Role
}
