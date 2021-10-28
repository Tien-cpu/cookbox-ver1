import { Menu } from "./Menu";

export interface Sessions{
  "id": number,
  "name": string,
  "timeFrom": number,
  "timeTo": number,
  "menus": Menu[]
}
