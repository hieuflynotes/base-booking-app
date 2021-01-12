import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Role } from "./Role";

export class RolePermission extends BaseModel {
  roleId ?: string;
  permissionId?: string;
}