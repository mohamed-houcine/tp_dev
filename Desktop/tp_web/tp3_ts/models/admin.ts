import { Personne } from "./personne";

export class Admin extends Personne {
  constructor(id: string, name: string) {
    super(id, name, "Admin");
  }
}
