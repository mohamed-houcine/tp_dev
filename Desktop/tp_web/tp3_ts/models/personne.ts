export abstract class Personne {
  public constructor(
    public id: string,
    public name: string,
    public role: "User" | "Admin"
  ) {}
}
