import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Role } from "./Role";

export class UserRole extends BaseModel {
  roleId ?: string;
  userId ?: string;
}