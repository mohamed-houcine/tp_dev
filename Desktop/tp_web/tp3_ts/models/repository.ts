import type { Ident } from "./id";

export class Repository<T extends Ident> {
  private items: T[];

  constructor(initialItems: T[] = []) {
    this.items = initialItems;
  }

  add(element: T): void {
    this.items.push(element);
  }

  remove(id: string): void {
    this.items = this.items.filter((item) => item.id !== id);
  }

  getAll(): T[] {
    return this.items;
  }
}
