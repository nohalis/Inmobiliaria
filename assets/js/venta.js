import { propiedades_venta } from "./data/propiedades_venta.js";

const dasboard = document.querySelector("#propiedades_venta");

const pintarVenta = () => {
  const mockup = propiedades_venta.map((propiedades) => {
    return `          
    <div class='col-md-4 mb-4'>
    <div class='card'>
      <img
        src='${propiedades.imagen}" 
        class='card-img-top 
        alt='Imagen del departamento'/>
      <div class='card-body'>
        <h5 class='card-title'>${propiedades.titulo}</h5>
        <p class='card-text'>${propiedades.descripcion}</p>
        <p><i class='fas fa-map-marker-alt'></i> ${propiedades.direccion}</p>
        <p>
          <i class='fas fa-bed'></i> ${propiedades.habitaciones} Habitaciones |
          <i class='fas fa-bath'></i> ${propiedades.banos} Baños
        </p>
        <p><i class='fas fa-dollar-sign'></i> ${propiedades.precio}</p>
${
  propiedades.permitidoFumar == true
    ? `<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>`
    : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`
}
 ${
   propiedades.permitidoMascotas === true
     ? `<p class="text-success">
              <i class="fas fa-paw"></i> Mascotas permitidas
            </p>`
     : `<p class="text-danger">
              <i class="fas fa-ban"></i> No se permiten mascotas
            </p>`
 }
        </p>
      </div>
    </div>
  </div>`;
  });

  dasboard.innerHTML = mockup.join("");
};

pintarVenta();
