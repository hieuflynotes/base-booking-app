import { BaseModel } from "@BaseTypes/model/BaseModel";
import { ListFilter } from "@BaseTypes/model/Filter";

export class Role extends BaseModel {
  name?: string;
  companyId?:string[];
}