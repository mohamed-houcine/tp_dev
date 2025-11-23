const notes = [12, 5, 17, 9, 20];

function getMoy(accumulator, element,idx ,array){
    return accumulator+element/array.length;
}

console.log(notes.reduce((getMoy),0));

const notesTriees = [...notes].sort((a, b) => b - a);
console.log(notesTriees);


function estSup10(n) {
    return n >= 10;
}
const notesSup10 = notes.filter(estSup10);
console.log(notesSup10);
