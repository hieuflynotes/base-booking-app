import { IBaseController } from "@BaseTypes/controller/IBaseController";
import { ListFilter } from "@BaseTypes/model/Filter";
import { Paging } from "@BaseTypes/model/Paging";
import { Appointment } from "../model/Appointment";

export interface IAppointmentController extends IBaseController<Appointment> {
	getGroupAppointmentByDate(
		params: ListFilter<Appointment> & { from: Date; to: Date }
	): Promise<Paging<AppointmentGroupByDate>>;
}

type AppointmentGroupByDate = {
	date: Date;
	data: Appointment[];
};
