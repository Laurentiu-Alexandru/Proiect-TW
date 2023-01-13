import { Card } from "./card";
import { Comanda } from "./comanda";
import { Produs } from "./produs";

export interface User{
  id: number;
  username: string;
  email?: string;
  password?: string;
  cos: Produs[];
  comenzi: Comanda[];
  card: Card;
  Adress: string;
}
