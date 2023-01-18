import { Card } from "./card";
import { Produs } from "./produs";

export interface User{
  id: number;
  username: string;
  email?: string;
  password?: string;
  cos: Produs[];
  comenzi: Produs[];
  preferences: string[];
  card: Card;
  Adress: string;
}
