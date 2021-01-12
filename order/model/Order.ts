import { BaseModel } from "@BaseTypes/model/BaseModel";

export class Order extends BaseModel {
	customerId ?: string;
    paymentMethod ?: string;
}
