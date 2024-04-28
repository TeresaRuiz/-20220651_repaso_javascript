// Arreglo de objetos con la información de tus favoritos
const favoritos = [
    { nombre: "Lover", descripcion: "Lover es el séptimo álbum de estudio de la cantante estadounidense Taylor Swift",
     imagen: "assets/img/Lover.jpeg" },
    { nombre: "Folklore", descripcion: "Folklore es el octavo álbum de estudio de la cantante estadounidense Taylor Swift. Fue un álbum sorpresa", 
    imagen: "assets/img/folklore.jpeg" },
    { nombre: "Evermore", descripcion: "Evermore es el noveno álbum de estudio de la cantautora estadounidense Taylor Swift. ", 
    imagen: "assets/img/evermore.jpg" },
    { nombre: "Fearless (Taylor's Version)", descripcion: "Es el primer álbum regrabado ", 
    imagen: "assets/img/fearless.jpg" },
    { nombre: "Red (Taylor's Version)", descripcion: "Es el segundo álbum regrabado ", 
    imagen: "assets/img/red.jpg" },
    { nombre: "Speak Now  (Taylor's Version)", descripcion: "Es el tercer álbum regrabado ", 
    imagen: "assets/img/speaknow.jpg" },
    { nombre: "Midnights", descripcion: "Es el decimo álbum de Taylor ", 
    imagen: "assets/img/Midnights.jpg" },
    { nombre: "TTPD", descripcion: "THE TORTURED POETS DEPARTMENT", 
    imagen: "assets/img/ttpd.jpg" },
    { nombre: "1989 (Taylor's Version)", descripcion: "Es el cuarto álbum regrabado", 
    imagen: "assets/img/1989.jpg" },
    { nombre: "The Eras Tour", descripcion: "Concierto mundial de Taylor", 
    imagen: "assets/img/the eras.jpg" },
    // Agrega más objetos según sea necesario
];

// Función para generar las tarjetas HTML
function generarTarjetas() {
    const cardContainer = document.getElementById("cardContainer");
    const cardData = document.querySelector(".card__container");

    // Limpiar contenido existente
    cardData.innerHTML = "";

    // Generar tarjetas para cada objeto en el arreglo
    favoritos.forEach((favorito) => {
        const article = document.createElement("article");
        article.classList.add("card__article");

        const cardInfo = document.createElement("div");
        cardInfo.classList.add("card__data");

        const img = document.createElement("img");
        img.src = favorito.imagen;
        img.alt = "card image";
        img.classList.add("card__img");

        const title = document.createElement("h1");
        title.classList.add("card__title");
        title.textContent = favorito.nombre;

        const description = document.createElement("p");
        description.classList.add("card__description");
        description.textContent = favorito.descripcion;

        // Agregar elementos de la forma
        const shapes = document.createElement("div");
        shapes.classList.add("card__shapes");
        for (let i = 0; i < 8; i++) {
            const shape = document.createElement("span");
            shape.classList.add("card__shape");
            shapes.appendChild(shape);
        }

        cardInfo.appendChild(img);
        cardInfo.appendChild(title);
        cardInfo.appendChild(description);

        article.appendChild(cardInfo);
        article.appendChild(shapes); // Agregar las formas a la tarjeta

        // Agregar tarjeta al contenedor
        cardData.appendChild(article);
    });
}

// Llamar a la función para generar las tarjetas al cargar la página
window.onload = generarTarjetas;