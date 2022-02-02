const prendaNombre = document.getElementById('nombre');
const prendaTalla = document.getElementById('talla');
const prendaMarca = document.getElementById('marca');
const prendaCantidad = document.getElementById('cantidad');
const aceptarBoton = document.getElementById('boton');

let prendasFormMode = 'create';
let prendasIndex = undefined;

function listaDePrendas() {
  prendess.innerHTML = '';

  prendess.forEach((prenda, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
  
   <td>${prenda.nombre}</td>
   <td>${prenda.talla}</td>
   <td>${prenda.marca}</td>
   <td>${prenda.cantidad}</td>
   <td>
   <button class="btn btn-primary" type="button" onclick="cargarPrenda(${index})">Actualizar</button>
   <button class="btn btn-primary" type="button" onclick="mostrarPrendas(${index})">Ver</button>
   <button class="btn btn-primary" type="button" onclick="eliminarPrenda(${index})">Eliminar</button>
  </td>
  
   `;
    prendad.appendChild(row);
  });
}
listaDePrendas();
