import { BaseModel } from "@BaseTypes/model/BaseModel";

export class Order extends BaseModel {
	customerId ?: string;
    paymentMethodId ?: string;
}
