let nombre = "Efrain";
let apellido = "Robles";
let estudiante = nombre.concat(' ', apellido);
console.log(estudiante)
let estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus) 
let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus) 

let length = estudiante.length
console.log(length) 

let firstName = nombre[0]
console.log(firstName) 

let lastName = apellido[5]
console.log(lastName) 

let withoutSpace = estudiante.replace(' ','')
console.log(withoutSpace) 

let booleanNombre = estudiante.includes(nombre)
console.log(booleanNombre) 
