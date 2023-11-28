document.addEventListener("DOMContentLoaded", function () {
    const searchButton = document.querySelector(".search-button");

    searchButton.addEventListener("click", fetchData);

    async function fetchData() {
        const searchTerm = document.querySelector(".search-box").value;
        const apiListContainer = document.querySelector(".api-list");
        const palmaresContainer = document.querySelector(".palmares-container");

        const url = `https://heisenbug-champions-league-live-scores-v1.p.rapidapi.com/api/championsleague/team?name=${encodeURIComponent(searchTerm)}`;
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'a6a23abeefmshe3c7b9bf74770d9p1da8efjsn207c572e4732', // Reemplaza con tu clave de API válida
                'X-RapidAPI-Host': 'heisenbug-champions-league-live-scores-v1.p.rapidapi.com'
            }
        };

        try {
            const response = await fetch(url, options);

            if (response.status === 403) {
                throw new Error('Error: Acceso prohibido. Verifica tu clave de API y los permisos.');
            }

            if (!response.ok) {
                throw new Error(`Error en la respuesta de la API: ${response.status}`);
            }

            const result = await response.json();

            apiListContainer.innerHTML = '';  // Limpiamos el contenedor de resultados

            // Verificamos si hay datos en el formato esperado
            if (result && result.length > 0) {
                result.forEach((item) => {
                    const li = document.createElement("li");
                    li.textContent = `${item.team_name}: ${item.country}`;
                    apiListContainer.appendChild(li);
                });

                palmaresContainer.textContent = '';  // Limpiamos el contenedor de mensajes de error
            } else {
                palmaresContainer.textContent = 'No se encontraron datos para la búsqueda.';
            }

        } catch (error) {
            console.error(error);
            palmaresContainer.textContent = 'Error al procesar la solicitud.';
        }
    }
});
