import { MenuDetails } from "./MenuDetails";
import { MenuStore } from "./MenuStore";

export interface Menu {
  "id": number;
  "name": string;
  "status": boolean;
  "menu_details": MenuDetails[];
  "menu_stores": MenuStore[]
}
