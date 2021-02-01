import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
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
	userId ?: string =  __(new _Define()
		.setYup(Yup.string().uuid())
	);
	status ?: AppointmentStatus =  __(new _Define()
		.setYup(Yup.string().required().trim().default(AppointmentStatus.CANCEL))
	);

	
}

export enum AppointmentStatus {
	CANCEL ="CANCEL"
}
