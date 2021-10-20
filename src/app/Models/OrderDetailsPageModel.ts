
import { OrderDetails } from "./OrderDetails";
export class OrderDetailsPage {
  'metaData': {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
    hasPrevious: boolean;
    hasNext: boolean;
    firstPage: string;
    lastPage: string;
  };
  'items': OrderDetails[];
}
