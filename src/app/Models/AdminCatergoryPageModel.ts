import { Category } from './Category';

export class categorypage {
    "metaData": {
        "currentPage": number,
        "totalPages": number,
        "pageSize": number,
        "totalCount": number,
        "hasPrevious": string,
        "hasNext": string,
        "nextPage": string,
        "previousPage": string,
        "firstPage": string,
        "lastPage": string,
        "currentPageUri" : string,
    };
    "items": Category[]
}
