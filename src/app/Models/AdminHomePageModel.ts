import { Store } from './Store';

export class adminpage {
    "metaData": {
        "currentPage": number,
        "totalPages": number,
        "pageSize": number,
        "totalCount": number,
        "hasPrevious": string,
        "hasNext": string,
        "firstPage": string,
        "lastPage": string
    };
    "items": Store[]
}
    