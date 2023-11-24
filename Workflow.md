# Instrucciones de diseño 

Para tener un trabajo acorde a estándares y un flujo de trabajo continuo, vamos a seguir este instructivo como una normativa de diseño puntual para cada sección de la web app.

# Temarios
- Pasos Previos
- Api's a utilizar
- Diseño gráfico
- Hoja de estilos

## Pasos previos
Para este paso vamos a dividir el trabajo en 3 puntos escenciales:

### Manejo de archivos
El manejo de archivos se realizará mediante directorios, los mismo que deberán contener cada uno de los archivos a emplear dentro de la construcción del aplicativo. El árbol de archivo se compone de la siguiente manera:

- **a. Pages:** Se guardarán los archivos ".html" de la página, a excepción del index, que será el único archivo fuera de directorio, fundamental para el despliegue.
- **b. Styles:** Se almacenarán los archivos css de todas las vistas del aplicativo. Los archivos se deben guardar de la siguiente manera: **_"{nombre de la pagina}.styles.css"_**. No lo deben guardar de manera diferente, esto ayudará a mantener un flujo de trabajo óptimo. 
Recuerden que deben comentar cada sección de sus estilos, en caso que necesite modificación, será más rápido identificar que parte modificar. 
- **c. Scripts:** De igual manera, los scripts serán guardados en el directorio del mismo nombr, con la extensión **_"{nombre de la pagina¨}.script.js"_**.
- **d. Assets:** Dentro de este directorio se guardarán imagenes, videos y todo lo necesarios en multimedia. Se divide en imágenes y videos, para un mejor orden de archivos.

### Trabajo por ramas
Para agilizar nuestro trabajo y mantenerlo óptimo, vamos a trabajar por un conjunto de ramas; necesario para organizar, revisar y publicar cada archivo o página requerida en el proyecto. 

Las ramas a trabajar serán:
- **_main_**
- **_landing_page_**
- **_api_1_**
- **_api_2_**
- **_api_3_**
- **_team_**
- **_contact_**

        Nota: Por favor, verifiquen que estén trabajando en sus ramas, para evitar conflictos con el main y algún daño a futuro en el proyecto. 

### Aviso de trabajo en rama
Por favor, una vez que hagan su trabajo, por favor subirlo a su rama y avisar en el grupo, para poder realizar la verificación y proceder a la subida al main. Recuerden realizar un **"pull request"** luego de subir su trabajo a su rama y, antes de volver a modificar su parte, traer los cambios desde el main hacia su rama/proyecto específico.

---
## Apis a utilizar
Para este trabajo vamos a generalizar la temática de entretenimiento, con el cual vamos a trabajar en 3 apis relacionadas a dicho medio. Las apis a usar son las siguientes:

- Api de deportes:

    | Nombre | Descripción | Enlace |
    |----------|----------|----------|
    | FootApi   | Api de fútbol en general   | https://footapi7.p.rapidapi.com/api/search/   |
    | World Cup Football    | Api relacionada con estadístiacs de la Copa Mundial   | https://world-cup-football3.p.rapidapi.com/api/v2   |
    | Beta-API-Football    | Api beta sobre fútbol en general   | https://api-football-beta.p.rapidapi.com/   |

    Documentaciones:
    FootApi: https://rapidapi.com/fluis.lacasse/api/footapi7/
    World Cup Football: https://github.com/estiens/world_cup_json
    Beta-API-Football: https://www.api-football.com/documentation-v3

- Api de Películas:

    | Nombre | Descripción | Enlace |
    |----------|----------|----------|
    | Netflix unofficial   | Api no oficial de Netflix | https://netflix-unofficial.p.rapidapi.com/api/   |
    | Movie Database   | API con base de datos sobre peliculas   | https://moviesdatabase.p.rapidapi.com/   |
    | Marvel API    | Api oficial de Marvel Comics  | https://gateway.marvel.com:443/v1/public|

    Documentaciones: 
    Netflix Unofficial: https://rapidapi.com/rasiqueira/api/netflix-unofficial/details
    Movie Database: https://rapidapi.com/SAdrian/api/moviesdatabase/details
    Marvel Api: https://tinyurl.com/yp8ck5vs

- Api de Música:

    | Nombre | Descripción | Enlace |
    |----------|----------|----------|
    | Spotify   | API oficial de Spotify   |  https://api.spotify.com.   |
    | BillBoard API   | Api de Billboard hot 100   | https://billboard-api2.p.rapidapi.com/   |
    | YT Music API    | Api oficial entregada por Google para obtener información de YT Music | youtube.googleapis.com  |

    Documentaciones:
    Spotify: https://developer.spotify.com/documentation/web-api/tutorials/getting-started


        Nota: las llaves de acceso público de muchas API estarán dentro de un archivo llamado *"api.keys.txt".

Para probar las API les recomiendo el servicio de POSTMAN, ahí pondrán probar si funciona la API y elegir cual es la más factible para emplear en el proyecto.

Enlace de Postman: https://dl.pstmn.io/download/latest/win64