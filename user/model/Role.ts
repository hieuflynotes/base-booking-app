import { BaseModel } from "@BaseTypes/model/BaseModel";
import { ListFilter } from "@BaseTypes/model/Filter";

export class Role extends BaseModel {
  name?: string;
  desc?: string;
}

const filterRole : ListFilter<Role> = {
    fieldFilters:{
        name: "ho hieu"
    }
}
