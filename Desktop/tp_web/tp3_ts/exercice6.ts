class Person {
  constructor(public name: string, public age: number) {}

  public greet(): void {
    console.log("name : " + this.name + " age : " + this.age);
  }
}

class Student extends Person {
  constructor(name: string, age: number, public school: string) {
    super(name, age);
  }
}

abstract class Shape {
  public abstract area(): number;
}

class Circle extends Shape {
  constructor(public rayon: number) {
    super();
  }

  public area(): number {
    return this.rayon * this.rayon * Math.PI;
  }
}

class Rectangle extends Shape {
  constructor(public largeur: number, public longueur: number) {
    super();
  }

  public area(): number {
    return this.largeur * this.longueur;
  }
}

interface Drivable {
  drive(): void;
}

class Car implements Drivable {
  drive(): void {
    console.log("go ahead !");
  }
}
