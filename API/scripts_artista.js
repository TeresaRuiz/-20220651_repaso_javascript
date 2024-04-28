// Función para obtener información del artista desde la API de Last.fm
async function obtenerInfoArtista(nombreArtista) {
    const apiKey = 'dbeea0ac0b4afccbded4c20fc7ae764b'; // Reemplaza 'TU_API_KEY' con tu propia API key de Last.fm
    const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${nombreArtista}&api_key=${apiKey}&format=json`;

    try {
        const respuesta = await fetch(url);
        const datos = await respuesta.json();
        return datos.artist;
    } catch (error) {
        console.error('Error al obtener la información del artista:', error);
    }
}

// Llamar a la función para mostrar la información del artista al enviar el formulario
document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const nombreArtista = document.getElementById('artist-input').value.trim();
    if (nombreArtista !== '') {
        mostrarInfoArtista(nombreArtista);
    } else {
        alert('Por favor ingresa el nombre del artista.');
    }
});


// Función para mostrar la información del artista en la página
async function mostrarInfoArtista(nombreArtista) {
    const artistInfoContainer = document.getElementById('artist-info');
    artistInfoContainer.innerHTML = ''; // Limpiar el contenedor antes de agregar nueva información

    try {
        const infoArtista = await obtenerInfoArtista(nombreArtista);

        // Verificar si hay imagen disponible
        let imagenURL = '';
        if (infoArtista && infoArtista.image && infoArtista.image[2] && infoArtista.image[2]['#text']) {
            imagenURL = infoArtista.image[2]['#text'];
        }

        // Crear elementos HTML para mostrar la información
        const div = document.createElement('div');
        div.classList.add('col-md-6', 'mx-auto', 'text-center', 'artist-card');
        const contenido = `
            <h2>${infoArtista.name}</h2>
            <img src="${imagenURL}" alt="${infoArtista.name}">
            <p>${infoArtista.bio.summary}</p>
            <a href="${infoArtista.url}" target="_blank" class="btn btn-primary">Ver más</a>
        `;
        div.innerHTML = contenido;

        // Agregar el elemento al contenedor principal
        artistInfoContainer.appendChild(div);
    } catch (error) {
        console.error('Error al mostrar la información del artista:', error);
    }
}

// Llamar a la función para mostrar la información del artista al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const nombreArtista = 'Maluma'; // Puedes cambiar el nombre del artista aquí
    mostrarInfoArtista(nombreArtista);
});
