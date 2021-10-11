export interface Orders {
  id: number;
  date: Date;
  payment_name: string;
  user_name: string;
  store_name: string;
  total: number;
  order_status: string;
}
