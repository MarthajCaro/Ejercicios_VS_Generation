let carrito = ["Pizza", "Gaseosa", "Postre"];
console.log(carrito);

carrito.push("Postre");      // agrega al final
console.log(carrito);        // [ 'Pizza', 'Gaseosa', 'Postre' ]

carrito.pop();               // elimina el último
console.log(carrito);        // [ 'Pizza', 'Gaseosa' ]

carrito[0] = "Hamburguesa";  // cambia el de la posición 0
console.log(carrito);        // [ 'Hamburguesa', 'Gaseosa' ]

console.log(carrito);        // [ 'Hamburguesa', 'Gaseosa' ]
console.log(carrito.length);

//! Objetos
let cliente = {
  nombre: "Andrés",
  edad: 30
};
console.log(cliente);
console.log(cliente.nombre);   
console.log(cliente.edad);   

cliente.ciudad = "Cali";     // agrega una nueva clave
console.log(cliente);        // { nombre: 'Andrés', edad: 30, ciudad: 'Cali' }
cliente.edad = 31;           // cambia un valor existente
console.log(cliente);        // { nombre: 'Andrés', edad: 31, ciudad: 'Cali' }
delete cliente.edad;         // elimina una clave
console.log(cliente);        // { nombre: 'Andrés', ciudad: 'Cali' }

let pedido = {
  cliente: "Camila",
  items: ["Pizza", "Gaseosa"]
};
console.log(pedido.items[0]);