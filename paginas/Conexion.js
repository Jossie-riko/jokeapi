let chistes = [];
let totalchis = 6;

// Conexión para obtener la lista de chistes
async function conexionLista(filtrotipo) {
  let url = `https://v2.jokeapi.dev/joke/${filtrotipo}?amount=${totalchis}&blacklistFlags=nsfw,racist,sexist,explicit`;

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
  if (chistes.length === 0) {
    chistes = await conexionLista("Any");
  }
  Home();
}

General();

async function FiltroConexion(Elfiltro) {
  document.getElementById("la-lista").innerHTML = "";
  chistes = await conexionLista(Elfiltro);
  const listaHTML = generarLista(chistes);
  document.getElementById("la-lista").innerHTML = listaHTML;
}
