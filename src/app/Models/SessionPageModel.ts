import { Sessions } from "./Sessions";

export class SessionPage{
  "metaData": {
    "currentPage": number,
    "totalPages": number,
    "pageSize": number,
    "totalCount": number,
    "hasPrevious": false,
    "hasNext": false
  };
  "items": Sessions[]
}
