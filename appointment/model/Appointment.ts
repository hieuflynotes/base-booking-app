import { BaseModel } from "@BaseTypes/model/BaseModel";

export class Appointment extends BaseModel {
	companyId ?: string;
	customerId ?: string;
	fromAt ?: Date;
	toAt ?: Date;
	userId ?: string;
	status ?: AppointmentStatus;
}

export enum AppointmentStatus {
	CANCEL ="CANCEL"
}
