const d =[1,2,3];
const e =[4,5,6];
const resultat =[...d,...e];

const user = {name:"Noor",age :10 , city:"Tunis"};
const userCopy = {...user};
userCopy.age = 20;
console.log(user.age);  
console.log(userCopy.age);
