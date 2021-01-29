import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Customer } from "@BookingAppTypes/customer/model/Customer";
import { Order } from "@BookingAppTypes/order/model/Order";
import { User } from "@BookingAppTypes/user/model/User";

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
