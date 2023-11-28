let image = document.querySelector("#img1")
let nombre = document.querySelector("#nombre")
let image2 = document.querySelector("#img2")
let nombre2 = document.querySelector("#nombre2")

function equipo1(logo, nombreEquipo) {
  image.setAttribute("src", logo);
  nombre.innerHTML = nombreEquipo;
}

function equipo2(logo, nombreEquipo) {
  image2.setAttribute("src", logo);
  nombre2.innerHTML = nombreEquipo;
}

let key = "69c1769b89bea399e9aec7a89ddc49502fc29797ca42db08d724192bcd440392"

function mostrarEquipos(idEquipo, fucionEquipo) {
  return fetch(`https://allsportsapi.com/api/football/?&met=Teams&teamId=${idEquipo}&APIkey=${key}`)
    .then(response => response.json())
    .then((equipos) => {
      if (equipos && equipos.result && equipos.result.length > 0) {
    
        fucionEquipo(
          equipos.result[0].team_logo,
          equipos.result[0].team_name
        );
        return true; 
      } else {
        console.error("No se encontraron datos para el equipo con ID:", idEquipo)
        return false
      }
    })
    .catch(error => {
      console.error("Error al obtener datos del equipo:", error)
      return false
    })
}

function buscarEquipoAleatorio(fucionEquipo) {
  const maxAttempts = 10
  let attempts = 0

  function intentarMostrarEquipo() {
    const equipoAleatorio = Math.floor(Math.random() * 2650) + 1;

    mostrarEquipos(equipoAleatorio, fucionEquipo)
      .then((equipoEncontrado) => {
        if (!equipoEncontrado && attempts < maxAttempts) {
          
          attempts++
          intentarMostrarEquipo()
        } else if (!equipoEncontrado) {
          console.error("No se pudo encontrar un equipo válido después de varios intentos.")
        }
        
      })
  }

  intentarMostrarEquipo()
}

buscarEquipoAleatorio(equipo1)

buscarEquipoAleatorio(equipo2)

var versus = document.getElementById("versus");

var numeroAleatorioIzquierda = Math.floor(Math.random() * 6)
var numeroAleatorioDerecha = Math.floor(Math.random() * 6)

var numeroIzquierda = document.createElement("span");
numeroIzquierda.textContent = numeroAleatorioIzquierda.toString()
numeroIzquierda.style.marginRight = "30px"
numeroIzquierda.style.fontSize = "50px" 
numeroIzquierda.style.fontWeight = "bold"
versus.insertBefore(numeroIzquierda, versus.firstChild)

var numeroDerecha = document.createElement("span");
numeroDerecha.textContent = numeroAleatorioDerecha.toString();
numeroDerecha.style.marginLeft = "30px"
numeroDerecha.style.fontSize = "50px"
numeroDerecha.style.fontWeight = "bold"
versus.appendChild(numeroDerecha)