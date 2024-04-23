// Arreglo de objetos con información de artistas, deportistas y cantantes favoritos
const favoritos = [
  {
      nombre: "Lionel Messi",
      profesion: "Deportista (Futbolista)",
      equipo: "Paris Saint-Germain",
      imagen: "messi.jpg"
  },
  {
      nombre: "Beyoncé",
      profesion: "Artista (Cantante)",
      genero: "R&B",
      imagen: "beyonce.jpg"
  },
  {
      nombre: "Roger Federer",
      profesion: "Deportista (Tenista)",
      ranking_atp: 7,
      imagen: "federer.jpg"
  },
  // Agrega más objetos según tus favoritos
];

// Función para mostrar la información en la página
function mostrarInformacion() {
  const infoContainer = document.getElementById("info-container");

  favoritos.forEach(favorito => {
      // Crear un nuevo elemento div para cada favorito
      const div = document.createElement("div");
      div.classList.add("col-md-4", "mb-4");

      // Crear contenido HTML con la información del favorito
      const contenido = `
          <div class="card">
              <img src="${favorito.imagen}" class="card-img-top" alt="${favorito.nombre}">
              <div class="card-body">
                  <h5 class="card-title">${favorito.nombre}</h5>
                  <p class="card-text">${favorito.profesion}</p>
                  ${favorito.equipo ? `<p class="card-text">Equipo: ${favorito.equipo}</p>` : ''}
                  ${favorito.genero ? `<p class="card-text">Género: ${favorito.genero}</p>` : ''}
                  ${favorito.ranking_atp ? `<p class="card-text">Ranking ATP: ${favorito.ranking_atp}</p>` : ''}
              </div>
          </div>
      `;

      // Agregar el contenido al div y luego al contenedor principal
      div.innerHTML = contenido;
      infoContainer.appendChild(div);
  });
}

// Llamar a la función para mostrar la información al cargar la página
document.addEventListener("DOMContentLoaded", mostrarInformacion);
