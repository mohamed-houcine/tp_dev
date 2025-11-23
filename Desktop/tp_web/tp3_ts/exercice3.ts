let id: number | string;

type A = { a: number };
type B = { b: string };
type interAB = A & B;

const example: interAB = { a: 10, b: "hello" };

type Status = "pending" | "done" | "canceled";
let s: Status = "pending";
s = "done";

let chaine: unknown = "une chaîne";

if (typeof chaine === "string") {
  console.log("Longueur :", (chaine as string).length);
} else {
  console.log("Ce n'est pas une chaîne");
}
