import { MenuStore } from "./MenuStore";

export interface Sessions{
  "id": number,
  "name": string,
  "timeFrom": number,
  "timeTo": number,
  "menuStores": MenuStore[]
}
