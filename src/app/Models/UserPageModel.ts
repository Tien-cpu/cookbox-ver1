import { Users } from './Users';

export class UserPage {
  'metaData': {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalCount: number;
    hasPrevious: string;
    hasNext: string;
    nextPage: string;
    previousPage: string;
    firstPage: string;
    lastPage: string;
  };

  'items': Users[];
}
