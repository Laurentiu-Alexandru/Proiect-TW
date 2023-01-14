import { Produs } from "./produs";

export interface Restaurant {
  id: number;
  name: string;
  type: string;
  filtre: string
  rating: number;
  location: string;
  produse: Produs[];
  banner_img: string;
}
