//arreglos (arrays)

let varios=[1,"Juan","Bogota",20.45,true];
//mustra poor consola el tamaño del arreglo
console.log(varios.length);
console.log(varios[1]);
//agrega un solo valor al array 
varios.push(30);
console.log(varios)
//sacar un elemento del arreglo (el ultimo)
varios.pop();
let enteros=[1,2,3,4,5,7,9];
//concatenar
let concat = varios.concat(enteros);
console.log(concat);
//agregar al inicio
let inicio=concat.unshift("Inicio");
console.log(inicio);
//quitar el primer elemento
inicio=concat.shift();

const arreglouno= inicio;
//produce un error, no se modifica la cantidad de elementos
//arreglouno.push(1);
//recorrer el areglo 
for(i=0;i<varios.length;i++){
    console.log(varios[i]);

}

varios.forEach(elemento=>{
    console.log(elemento);
})

//.reduce();
let numeros=[100,300,2,5,10]
let resultado=numeros.reduce((acumulador,valorActual)=>{

    return acumulador+valorActual;

})

console.log(resultado);


//.filter()
let filtrados=numeros.filter(numero=>{
    return numero>10
} )

console.log(filtrados);


let paises =["Colombia","USA","Brasil","Mexico"];

let filtered =paises.filter(pais=>{
    return pais.startsWith("C")
})

console.log(filtered);
//.map();

const saludarPais=paises.map(country=>{

    return "Bienvenidos pasajeros de "+ country;

})
console.log(saludarPais);
/*crear arreglos usando funciones tipo flecha(10)
usar métodos de arreglos vistos y mostrar resultados(para cada arreglo minimo un metodo) 
siempre usando callabackfn 
como minimo 4 arreglos 
*/ 

//dice los numero pares 
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10,11,12,13,14,15,16,17,18,19,20];
const pares = num.filter(num1 => {

    return num1 % 2 === 0

})
console.log(pares); 



//muestra los numeros duplicados es decir multiplicado por 2
const numbers= [1, 2, 3, 4, 5];
let numerosDuplicados = numbers.map(num => {
    return num * 2

});
console.log(numerosDuplicados); 


//filtra las personas que tengan una edad por encima de 18 años 
const personas = [
    { nombre: 'Juan', edad: 25 },
    { nombre: 'María', edad: 17 },
    { nombre: 'Pedro', edad: 30 },
    { nombre: 'Ana', edad: 20 }
  ];
  
  let personasMayoresDeEdad = personas.filter(persona => {
    return persona.edad >= 18
});
  
  console.log(personasMayoresDeEdad);
  

  //reduce el array a un solo resultado 

  const n = [1, 2, 3, 4, 5];
let suma = n.reduce((total, num) => {
    
   return  total + num

});

console.log(suma);


//hacer todas las letras mayusculas de un array 

const palabras = ['hola', 'adiós', 'bienvenido', 'gracias'];
let mayusculas = palabras.map(palabra => {
    
    return palabra.toUpperCase()

});

console.log(mayusculas); 

//cuenta la cantidad de caracteres 
const arrayPalabras = ['manzana', 'banana', 'pera', 'uva'];
let longitudes = arrayPalabras.map(palabra => {
    
    
    return palabra.length
});
console.log(longitudes); 


//crea un arreglo con la raiz cuadrada 
const Numeros3 = [4, 9, 16, 25];
let raices = Numeros3.map(numero =>{

  return Math.sqrt(numero)
});
console.log(raices); 





