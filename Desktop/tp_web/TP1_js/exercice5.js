const livre ={titre:"Les miserables",auteur:"Victor Hugo",année:1862};
livre.getInfo=function(){
    return("le titre est : "+this.titre+" l'auteur est "+this.auteur+" ecrit en:"+this.année);
}

console.log(livre.getInfo());
