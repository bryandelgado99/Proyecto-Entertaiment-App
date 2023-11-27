/* Scroll Bar Down */
window.addEventListener("scroll", function(){
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("down_scroll", window.scrollY>0);
})

// ---------------------------------------------------------
function handleKeyPress(event) {
    // Verificar si la tecla presionada es "Enter"
    if (event.key === "Enter") {
        // No mostrar el recuadro hasta presionar enter
        const elementoMostrable = document.getElementById("mediaDetails");
        elementoMostrable.style.display = "block";
        
        buscarMedia();
    }
}

function buscarMedia() {
    const apiKey = 'c55a99ce257fed54aab36a81a1125aec'; // Reemplaza con tu clave de API de TMDb
    const mediaName = document.getElementById('mediaInput').value;
    const url = `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&query=${mediaName}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                const media = data.results[0];
                const posterPath = media.poster_path ? `https://image.tmdb.org/t/p/w500${media.poster_path}` : '';

                const mediaDetails = `
                    <h2>${media.title || media.name}</h2>
                    <div class="content-media-container">
                        <div class="information-media">
                            <p><strong>Tipo:</strong> ${media.media_type}</p>
                            <p><strong>Año de lanzamiento:</strong> ${media.release_date || media.first_air_date}</p>
                            <p><strong>Descripción:</strong> ${media.overview}</p>
                            <p><strong>Puntuación:</strong> ${media.vote_average}</p>
                        </div>
                        <img src="${posterPath}" alt="${media.title || media.name} Poster" style="width: 200px; height: auto;">
                    </div>
                `;

                document.getElementById('mediaDetails').innerHTML = mediaDetails;
            } else {
                document.getElementById('mediaDetails').innerHTML = '<center>No se encontraron resultados</center>';
            }
        })
        .catch(error => {
            console.error('Error al buscar la película o serie:', error);
        });
}

// Agrega esta función al script existente
function cargarTopMedia() {
const apiKey = 'c55a99ce257fed54aab36a81a1125aec';
const url = `https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}`;

fetch(url)
.then(response => response.json())
.then(data => {
    const topMediaContainer = document.getElementById('topMedia');
    topMediaContainer.innerHTML = ''; // Limpiar contenido anterior

    if (data.results && data.results.length > 0) {
        data.results.slice(0, 5).forEach(media => {
            const posterPath = media.poster_path ? `https://image.tmdb.org/t/p/w500${media.poster_path}` : '';
            const mediaDetails = `
                <div class="top-media-item">
                    <h3>${media.title || media.name}</h3>
                    <p><strong>Tipo:</strong> ${media.media_type}</p>
                    <p><strong>Año de lanzamiento:</strong><br> ${media.release_date || media.first_air_date}</p>
                    <img src="${posterPath}" alt="${media.title || media.name} Poster" width="140px">
                </div>
            `;
            topMediaContainer.innerHTML += mediaDetails;
        });
    } else {
        topMediaContainer.innerHTML = 'No se encontraron resultados';
    }
})
.catch(error => {
    console.error('Error al cargar el top de series y películas:', error);
});
}


document.addEventListener('DOMContentLoaded', cargarTopMedia);
