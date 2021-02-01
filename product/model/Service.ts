import { _Define, __ } from "@BaseTypes/lib/SchemaBuilderAle";
import * as Yup from "yup";
import { Product } from "./Product";

export class Service extends Product {
   // duration: thoi gian thu vien dich vu tinh bang milisecond
   // 30 min = 30 * 60 * 1000 = 1.800.000 milisecond
   duration?: number =  __(new _Define()
      .setYup(Yup.number().min(0, "Minimum price is 0").integer("The price must be an integer!"))
   );
}
