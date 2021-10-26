import { Menu } from "./Menu"
export class MenuPage{
  "metaData":{
    "currentPage":    number;
    "totalPages":     number;
    "pageSize":       number;
    "totalCount":     number;
    "hasPrevious":    boolean;
    "hasNext":        boolean;
    "currentPageUri": string;
    "firstPage":      string;
    "lastPage":       string;
  }
  "items": Menu[];
}
