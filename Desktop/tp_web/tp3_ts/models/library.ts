import type { Livre } from "./livre";
import { verif } from "../utils/verif";

export class Library {
  private livres: Livre[] = [];

  ajouter(liv: Livre): boolean {
    if (verif(liv, this.livres) === -1) {
      this.livres.push(liv);
      return true;
    }
    return false;
  }

  retirer(liv: Livre): boolean {
    const idx = verif(liv, this.livres);
    if (idx !== -1) {
      this.livres.splice(idx, 1);
      return true;
    }
    return false;
  }

  rechercher(id: string): Livre | undefined {
    return this.livres.find((l) => l.id === id);
  }

  emprunter(id: string): void {
    const li = this.rechercher(id);
    if (li) {
      li.available = false;
    }
  }

  rendre(id: string): void {
    const li = this.rechercher(id);
    if (li) {
      li.available = true;
    }
  }

  getAll(): Livre[] {
    return this.livres;
  }
}
