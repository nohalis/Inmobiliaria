import { propiedades_alquiler } from "./data/propiedades_alquiler.js";

const dasboard = document.querySelector("#propiedades_alquiler");

const pintarAlquiler = () => {
  const mockup = propiedades_alquiler.map((propiedades) => {
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
        <p class='text-success'>
          <i class='fas fa-smoking'></i> ${
            propiedades.permitidoFumar
              ? "Permitido fumar"
              : "No permitido fumar"
          }
        </p>
        <p class='text-success'>
          <i class='fas fa-paw'></i> ${
            propiedades.permitidoMascotas
              ? "Mascotas permitidas"
              : "No se permiten mascotas"
          }
        </p>
      </div>
    </div>
  </div>`;
  });

  dasboard.innerHTML = mockup.join("");
};

pintarAlquiler();
