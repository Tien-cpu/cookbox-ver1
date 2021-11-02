export interface Dish {
  "id": number;
  "name": string;
  "description": string;
  "image": string;
  "category_id": number;
  "category_name": string;
  "status": boolean;
  "parent_id": number;
  "dish_ingredients": {
    "id": number;
    "metarial_id": number;
    "metarial_name": string;
    "quantity": number;
    "dish_id": number;
  }[];
  "nutrient_details":{
    "id": number;
    "metarial_id": number;
    "metarial_name": string;
    "amount": number;
    "dish_id": number;
  }[];
  "repices" :
    {
      "id": number;
      "dishId": number;
      "steps":
        {
          "id": number;
          "description" : string;
          "repiceId": number;
        }[];
    }[];
  "taste_details":{
    "id": number;
    "taste_name": string;
    "taste_level": number;
    "taste_id":  number;
  }[]
}
