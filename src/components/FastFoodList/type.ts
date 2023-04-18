export interface FastFoodItem {
  id: number;
  name: string;
  price: number;
  ingredients: string;
  imageUrl: string;
}

export interface FastFoodItems {
  fastFoodItems: Array<FastFoodItem>;
}
