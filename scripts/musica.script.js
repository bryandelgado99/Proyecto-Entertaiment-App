document.addEventListener('DOMContentLoaded', function () {
  const searchForm = document.getElementById('searchForm');
  const titleInput = document.getElementById('titleInput');
  const resultContainer = document.getElementById('resultContainer');

  searchForm.addEventListener('submit', async function (event) {
      event.preventDefault();

      // Obtener el valor del título de la música desde el input
      const title = titleInput.value;

      // Realizar la solicitud a la API con el título
      const url = `https://youtube-music-api3.p.rapidapi.com/search?q=${encodeURIComponent(title)}&type=song`;
      const options = {
          method: 'GET',
          headers: {
              'X-RapidAPI-Key': '6e3b8ab492mshdf72a391208273ap1c0a82jsn06b13a2eab2d',
              'X-RapidAPI-Host': 'youtube-music-api3.p.rapidapi.com'
          }
      };

      try {
          const response = await fetch(url, options);
          const data = await response.json();

          // Imprimir la respuesta completa en la consola para depuración
          console.log('Respuesta de la API:', data);

          // Limpiar el contenedor de resultados antes de mostrar nuevos resultados
          resultContainer.innerHTML = '';

          if (data && data.result && data.result.length > 0) {
              data.result.forEach(song => {
                  // Crear el HTML para cada canción
                  const songHTML = `
                      <div id="resultContainerSong">
                          <div id="imgsongcontainer"><img src="${song.thumbnail}" id="imgsongfoto"></div>
                          <div id="infosongcontainer">
                              <div id="titlesong"><p>${song.title}</p></div>
                              <div id="author">${song.author}</div>
                              <div id="duracion">${song.duration}</div>
                              <div id="reproduccion">
                                <a href="https://www.youtube.com/watch?v=${song.videoId}" target="_blank">Reproducir</a>
                              </div>
                          </div>
                      </div>
                  `;

                  // Agregar el HTML al contenedor de resultados
                  resultContainer.innerHTML += songHTML;
              });
          } else {
              resultContainer.textContent = 'No se encontraron resultados';
          }

      } catch (error) {
          console.error('Error al realizar la solicitud:', error);
          resultContainer.textContent = 'Error al realizar la búsqueda';
      }
  });
});
