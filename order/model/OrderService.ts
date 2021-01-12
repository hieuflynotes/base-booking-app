import { BaseModel } from "@BaseTypes/model/BaseModel";

export class OrderService extends BaseModel {
    productId?: string;
    orderId?: string;
    quantity?: string;
    price?: string;
    userId ?: string;
}
