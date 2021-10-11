import { Orders } from './Orders';

export class OrderPage {
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

  'items': Orders[];
}
