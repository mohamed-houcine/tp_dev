class Etudiant{
    constructor(nom,note){
        this.nom=nom;
        this.note=note;
    };
    getMention(){
        if(this.note>=16){
            return "Trés bien"
        }else if(this.note>=14){
            return "Bien"
        }else if(this.note>=10){
            return "Passable"
        }else{
            return "Echec"
        }
    }
}

var e1=new Etudiant("Mohamed",16);
var e2=new Etudiant("Nour",15);
var e3=new Etudiant("Ahmed",12);

console.log(e1.getMention());
console.log(e2.getMention());
console.log(e3.getMention());

