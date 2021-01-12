import { BaseModel } from "@BaseTypes/model/BaseModel";

export class Appointment extends BaseModel {
	companyId ?: string;
	customerId ?: string;
	fromAt ?: string;
	toAt ?: Date;
	userId ?: string
}
