import type { Livre } from "../models/livre";

export async function apiFictif(): Promise<Livre[]> {
  return [
    {
      id: "1",
      title: "Clean Code",
      author: "Robert C. Martin",
      year: 2008,
      available: true,
    },
    {
      id: "2",
      title: "Design Patterns",
      author: "Erich Gamma",
      year: 1994,
      available: true,
    },
    {
      id: "3",
      title: "You Don't Know JS",
      author: "Kyle Simpson",
      year: 2015,
      available: false,
    },
  ];
}
