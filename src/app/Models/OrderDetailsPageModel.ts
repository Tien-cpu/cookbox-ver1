
import { OrderDetails } from "./OrderDetails";
export class OrderDetailsPage {
  'metaData': {
    "currentPage": number,
     "totalPages": number,
     "pageSize": number,
     "totalCount": number,
     "hasPrevious": string,
     "hasNext": string,
     "nextPage": string,
     "previousPage": string,
     "firstPage": string,
     "lastPage": string
  };
  'items': OrderDetails[];
}
