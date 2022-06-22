// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista). 

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// Cada respuesta debe ser, como siempre, usuario friendly. 
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano. 
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso. 

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

const arrayPizzas=[
{
  id:1,
  nombre:"Pepperoni",
  ingredientes:["harina","pepperoni","tomate"],
  precio:650,
},
{
  id:2,
  nombre:"Champiniones",
  ingredientes:["harina","champiniones","tomate"],
  precio:500,
},
{
  id:3,
  nombre:"Margarita",
  ingredientes:["harina","albahaca","tomate"],
  precio:678,
},
{
  id:4,
  nombre:"Cuatro quesos",
  ingredientes:["harina","queso azul","tomate"],
  precio:650,
},
{
  id:5,
  nombre:"Hawaiana",
  ingredientes:["harina","anana","tomate"],
  precio:750,
},{
  id:6,
  nombre:"Napolitana",
  ingredientes:["harina","alcaparras","tomate"],
  precio:850,
}
];


// A
let Impares = arrayPizzas.filter(function(El){
  return (El.id%2!==0);
});
console.log(Impares);

// B
arrayPizzas.forEach(elemento =>{
  if ((elemento.precio)<600){
    console.log('Si, hay una pizza que sale' + " " +  elemento.precio)
  }
})

// C
const TotalPizzas = arrayPizzas.map(i => i.nombre)
console.log(TotalPizzas);

// D
const PrecioPizzas = arrayPizzas.map(i => i.precio)
console.log(PrecioPizzas);

// E
arrayPizzas.forEach((elemento, precio) => console.log("Pizza", elemento.nombre, elemento.precio))
