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
        console.log(data.result[0].title)
  
        if (data && data.result && data.result.length > 0) {
            data.result.forEach(song => {
                console.log('Título de la canción:', song.title);
                console.log('Artista:', song.author);
        
                // Resto del código para mostrar en el contenedor
                const songElement = document.createElement('div');
                songElement.textContent = `${song.title} - ${song.author} (${song.duration})`;
                resultContainer.appendChild(songElement);
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
  