export interface Restaurant {
  id: string;
  name: string;
  description: string;
  pictureId: string;
  city: string;
  rating: number;
  type: "Fast Food" | "Casual" | "Fine Dining" | "Cafes"
  isOpen: boolean
  priceRange: "Low" | "Medium" | "High"; 
}
