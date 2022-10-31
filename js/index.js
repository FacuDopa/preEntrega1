let pregunta = prompt('¿Ya haz visto nuestros productos y quieres agregarlos al carrito? \nsi es asi intoduce si, de lo contrario pon no').toLowerCase();

// variables para almacernar precios, nombres y numero de los productos
let precioProducto = 0;
let numeroProducto = 1;
let nombresProductos = '';

console.log(numeroProducto);

// condicional para el primer prompt
if ( pregunta === 'si' ) {
   alert('Ingresa de a un producto a la vez, tal cual su nombre \n(si no quieres agregar mas productos ingresa un 0) \nsi desea terminar la compra ingrese 1');
}

// bucle para compra de productos
while ( pregunta === 'si' ) {
   var producto = prompt(`Producto N°${numeroProducto}`);
   
   // funcion para almacenar los precios y productos seleccionados
   let sumarProductos = (prodFuncion) => {
      
      if (prodFuncion === 'Rack para Tv') {
         precioProducto += 500;
         numeroProducto ++
         nombresProductos += ` ${prodFuncion},`
         alert(`Agregado, cuenta total $${precioProducto}`)
      }
      else if ( prodFuncion === 'Avión de madera para chicos') {
         precioProducto += 300;
         numeroProducto ++
         nombresProductos += ` ${prodFuncion},`
         alert(`Agregado, cuenta total $${precioProducto}`)
      }
      else if ( prodFuncion === 'Banco') {
         precioProducto += 100;
         numeroProducto ++
         nombresProductos += ` ${prodFuncion},`
         alert(`Agregado, cuenta total $${precioProducto}`)
      }
      else if ( prodFuncion === 'Mesita de luz') {
         precioProducto += 400;
         numeroProducto ++
         nombresProductos += ` ${prodFuncion},`
         alert(`Agregado, cuenta total $${precioProducto}`)
      }
      else if ( prodFuncion === 'Lapicero') {
         precioProducto += 150;
         numeroProducto ++
         nombresProductos += ` ${prodFuncion},`
         alert(`Agregado, cuenta total $${precioProducto}`)
      }
      else if ( prodFuncion === 'Camión de juguete') {
         precioProducto += 100;
         numeroProducto ++
         nombresProductos += ` ${prodFuncion},`
         alert(`Agregado, cuenta total $${precioProducto}`)
      }
      else if ( prodFuncion === 'Soporte para Auricular') {
         precioProducto += 600;
         numeroProducto ++
         nombresProductos += ` ${prodFuncion},`
         alert(`Agregado, cuenta total $${precioProducto}`)
      }
      else if ( prodFuncion === 'Maceta') {
         precioProducto += 350;
         numeroProducto ++
         nombresProductos += ` ${prodFuncion},`
         alert(`Agregado, cuenta total $${precioProducto}`)
      }
      else{
         alert(`El producto ${producto} no se encuentra, intente nuevamente`);
      }  
   }

   // condicional para romper el bucle
   if ( producto === '0' || producto === '1') {
      break;
   }

   // llamada de la funcion pasando por parametro el producto ingresado por promt
   sumarProductos(producto);

}

// condicional con alerta para informar los precios y productos comprados
if ( producto === '1' && nombresProductos != '') {
   alert(`Tus Productos son: ${nombresProductos} \nCosto total: $${precioProducto}`)
}

// seccion para eliminar productos en caso de equivocarse
alert('Si deseas eliminar algun producto introduce su nombre, de lo contratro ingresa un 0')
let correcion = prompt('Producto a eliminar');

let nuevaLista = nombresProductos

// funcion que determina que producto se elimina y cuanta plata hay que restar
let productoElimminado = (eliminar) => {
   nuevaLista = nuevaLista.replace(`${eliminar},`, '')

   if ( eliminar === 'Rack para Tv') {
      precioProducto -= 500;
   }
   else if ( eliminar === 'Avión de madera para chicos') {
      precioProducto -= 300;
   }
   else if ( eliminar === 'Banco') {
      precioProducto -= 100;
   }
   else if ( eliminar === 'Mesita de luz') {
      precioProducto -= 400;
   }
   else if ( eliminar === 'Lapicero') {
      precioProducto -= 150;
   }
   else if ( eliminar === 'Camión de juguete') {
      precioProducto -= 100;
   }
   else if ( eliminar === 'Soporte para Auricular') {
      precioProducto -= 600;
   }
   else if ( eliminar === 'Maceta') {
      precioProducto -= 350;
   }


   alert(`Tu nueva lista es: ${nuevaLista} \nprecio Final: $${precioProducto}`)
}

// declaracion de la variable por fuera asi la puedo usar 'globalmente'
let correcion2 ;


if ( correcion != '0') {
   // llamado a la funcion
   productoElimminado(correcion)
   // en caso de querer eliminar otro producto, entra en el while
   correcion2 = prompt('Eliminar otro Producto? si/no').toLowerCase()
}

while ( correcion2 === 'si' ) {

   correcion = prompt('Producto a eliminar');

   // llamado de funcion
   productoElimminado(correcion)

   correcion2 = prompt('Eliminar otro Producto? si/no').toLowerCase()

   if (correcion2 === 'no') {
      break;
   }
}