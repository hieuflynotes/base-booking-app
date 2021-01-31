import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import { BaseModel } from "@BaseTypes/model/BaseModel";
import { DataTypes } from "sequelize";
import * as Yup from "yup";
export class Appointment extends BaseModel {
	companyId ?: string = __(new _Define()
		.setSequelize({type : DataTypes.UUID, allowNull : false, field : "company_id"})
		.setYup(Yup.string())
	);
	customerId ?: string = __(new _Define()
		.setSequelize({type : DataTypes.UUID, allowNull : false, field : "customer_id"})
		.setYup(Yup.string().uuid().required().trim())
	);
	fromAt ?: Date = __(new _Define()
		.setSequelize({type : DataTypes.TIME, allowNull : true, field : "from_at"})
		.setYup(Yup.date())
	);
	toAt ?: Date = __(new _Define()
		.setSequelize({type : DataTypes.TIME, allowNull : true, field : "to_at"})
		.setYup(Yup.date())
	);
	userId ?: string =  __(new _Define()
		.setSequelize({type : DataTypes.UUID, allowNull : false, field : "user_id"})
		.setYup(Yup.string().uuid())
	);
	status ?: AppointmentStatus =  __(new _Define()
		.setSequelize({type : DataTypes.STRING, allowNull : false, field : "status"})
		.setYup(Yup.string().required().trim().default(AppointmentStatus.CANCEL))
	);

	
}

export enum AppointmentStatus {
	CANCEL ="CANCEL"
}
