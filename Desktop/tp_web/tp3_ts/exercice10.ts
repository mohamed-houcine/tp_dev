import { Library } from "./models/library";
import type { Livre } from "./models/livre";
import { apiFictif } from "./services/service";

async function main(): Promise<void> {
  const livres: Livre[] = await apiFictif();
  const library = new Library();

  livres.forEach((liv) => library.ajouter(liv));

  library.emprunter("1");

  library.rendre("1");

  console.log(library.getAll());
}

main();
