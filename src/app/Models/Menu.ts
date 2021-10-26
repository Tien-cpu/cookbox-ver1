import { MenuDetails } from "./MenuDetails";
import { MenuStore } from "./MenuStore";

export interface Menu {
  "id": number;
  "session_id": string;
  "session_name": string;
  "timeFrom": number;
  "timeTo": number;
  "status": boolean;
  "menu_details": MenuDetails[];
  "menu_stores": MenuStore[]
}
