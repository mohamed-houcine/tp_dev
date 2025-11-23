import type { Livre } from "../models/livre";

export function verif(liv: Livre, livres: Livre[]): number {
  for (let i = 0; i < livres.length; i++) {
    if (livres[i].id === liv.id) {
      return i;
    }
  }
  return -1;
}
