import { Dish } from 'src/app/Models/Dish';
export interface DishChild {
  "id" : number;
  "name": string;
  "description": string;
  "image": string;
  "category_id": number;
  "category_name": string;
  "status": boolean;
  "parent_id": number;
  "dish_ingredients": {
    "id" : number;
    "metarial_id": number;
    "metarial_name": string;
    "quantity": number;
    "dish_id": number;
  }[];
  "nutrient_details":{
    "id" : number;
    "nutrient_id": number;
    "nutrient_name": string;
    "amount": number;
    "dish_id": number;
  }[];
  "repices" :
    {
      "id" : number;
      "dishId": number;
      "steps":
        {
          "id" : number;
          "description" : string;
          "repiceId": number;
        }[];
    }[];
  "taste_details":{
    "taste_name": string;
    "taste_level": number;
    "taste_id":  number;
  }[];
  "list_child" : Dish[]
}
