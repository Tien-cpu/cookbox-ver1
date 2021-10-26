import { OrderDetails } from "./OrderDetails";
export interface Orders {
  "id":           number;
  "date":         Date;
  "payment_name": string;
  "payment_id":   string;
  "user_id":      number;
  "store_id":     number;
  "user_name":    string;
  "store_name":   string;
  "total":        number;
  "order_status": string;
  "orderDetails": OrderDetails[];
  }

