import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { Customer } from "@BookingAppTypes/customer/model/Customer";
import { Order } from "@BookingAppTypes/order/model/Order";
import * as Yup from "yup";
export class Appointment extends BaseModel {
	companyId ?: string = __(new _Define()
		.setYup(Yup.string())
	);
	customerId ?: string = __(new _Define()
		.setYup(Yup.string().uuid().required().trim())
	);
	fromAt ?: Date = __(new _Define()
		.setYup(Yup.date())
	);
	toAt ?: Date = __(new _Define()
		.setYup(Yup.date())
	);
	
	status ?: AppointmentStatus =  __(new _Define()
		.setYup(Yup.string().required().trim().default(AppointmentStatus.CANCEL))
	);

	orderId?: string;
	order?: Order;
	customer? : Customer;
}

export enum AppointmentStatus {
	NEW = "NEW",
	ARRIVED = "ARRIVED",
	CANCEL ="CANCEL",
	COMPLETED = "COMPLETED"
}
