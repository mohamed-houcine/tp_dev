function add(a: number, b: number): number {
  return a + b;
}

function greet(name: string, age?: number): void {
  const message = age
    ? "hello , ur name " + name + " ur age " + age
    : "hello , ur name " + name;
  console.log(message);
}

greet("mohamed", 21);
greet("mohamed");

function power(base: number, exp: number = 2): number {
  let result = 1;
  const positiveExp = Math.abs(exp);

  for (let i = 0; i < positiveExp; i++) {
    result *= base;
  }

  return exp < 0 ? 1 / result : result;
}

function combine(val1: number, val2: number): number;
function combine(val1: string, val2: string): string;
function combine(
  val1: number | string,
  val2: number | string
): number | string {
  return (val1 as any) + (val2 as any);
}
