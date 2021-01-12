import { BaseModel } from "@BaseTypes/model/BaseModel";

export class OrderProduct extends BaseModel {
    productId?: string;
    orderId?: string;
    quantity?: string;
    price?: string;
    userId ?: string;
}
