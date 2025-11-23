import { Personne } from "./personne";

export class Utilisateur extends Personne {
  constructor(id: string, name: string) {
    super(id, name, "User");
  }
}
