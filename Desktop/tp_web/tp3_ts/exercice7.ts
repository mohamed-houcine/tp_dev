function identity<T>(value: T): T {
  return value;
}

function getFirst<T>(arr: T[]): T {
  return arr[0];
}

class Repository<T> {
  private arr: T[];

  public constructor(arr: T[]) {
    this.arr = arr;
  }

  add(element: T): void {
    this.arr.push(element);
  }

  remove(index: number): void {
    this.arr.splice(index, 1);
  }

  getAll(): T[] {
    return this.arr;
  }
}

interface ApiResponse<T> {
  data: T;
  error?: string;
}
