export interface Restaurant {
  id: number;
  name: string;
  type: string;
  rating: number;
  location: string;
  produse: [
    {
      id: number;
      nume: string;
      ingrediente: string;
      pret: number;
    }
  ];
  banner_img: string;
}
