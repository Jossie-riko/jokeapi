let pokemones = [];
let totalPokes = 6;

// Conexión para obtener la lista de chistes
async function conexionLista(filtrotipo) {
  let url = `https://v2.jokeapi.dev/joke/${filtrotipo}?amount=${totalPokes}&blacklistFlags=nsfw,racist,sexist,explicit`;

  const res = await fetch(url);
  const data = await res.json();

  // Si es solo un chiste, lo convertimos en array
  if (data.jokes) {
    return data.jokes;
  } else {
    return [data];
  }
}

// Cargar todos los chistes al iniciar
async function General() {
  if (pokemones.length === 0) {
    pokemones = await conexionLista("Any");
  }
  Home();
}

General();

async function FiltroConexion(Elfiltro) {
  document.getElementById("la-lista").innerHTML = "";
  pokemones = await conexionLista(Elfiltro);
  const listaHTML = generarLista(pokemones);
  document.getElementById("la-lista").innerHTML = listaHTML;
}
