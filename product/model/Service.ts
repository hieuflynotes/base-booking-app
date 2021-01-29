import { Product } from "./Product";

export class Service extends Product {
   // duration: thoi gian thu vien dich vu tinh bang milisecond
   // 30 min = 30 * 60 * 1000 = 1.800.000 milisecond
   duration?: number;
}
