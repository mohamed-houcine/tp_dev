
let nom: string = "Mohamed";
let age: number = 20;
let isStudent: boolean = true;
let notes: number[] = [15, 18, 20];

function somme(a: number, b: number): number {
    return a + b;
}

// Interface Etudiant
interface Etudiant {
    id: number;
    nom: string;
    prenom: string;
    age: number;
}

class EtudiantImpl implements Etudiant {
    constructor(
        public id: number,
        public nom: string,
        public prenom: string,
        public age: number
    ) {}

    afficherInfo(): void {
        console.log(`ID: ${this.id}, Nom: ${this.nom}, Prénom: ${this.prenom}, Âge: ${this.age}`);
    }
}



function creerTableau<T>(val1: T, val2: T, val3: T): T[] {
    return [val1, val2, val3];
}

function afficher(val: string | number, prefix?: string): void {
    if (prefix) {
        console.log(prefix + " " + val);
    } else {
        console.log(val);
    }
}

enum Role {
    Etudiant,
    Enseignant,
    Admin
}

let r: Role = Role.Enseignant;
console.log("Rôle :", r);
