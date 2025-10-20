function buscadorfuncion(sza) {
  if (sza.length >= 3) {
    const filtrados = pokemones.filter(joke => {
      return joke.joke?.toLowerCase().includes(sza.toLowerCase()) ||
             joke.setup?.toLowerCase().includes(sza.toLowerCase()) ||
             joke.delivery?.toLowerCase().includes(sza.toLowerCase());
    });

    let listaHTML = generarLista(filtrados);
    document.getElementById("la-lista").innerHTML = listaHTML;
  } else {
    let listaHTML = generarLista(pokemones);
    document.getElementById("la-lista").innerHTML = listaHTML;
  }
}

function generarLista(arrayJokes) {
  let listaHTML = "";
  for (let i = 0; i < arrayJokes.length; i++) {
    let joke = arrayJokes[i];
    let id = joke.id;
    let texto = joke.type === "single" ? joke.joke : joke.setup;

    listaHTML += `
      <div class="c-chiste poke-${id}" onclick="VerChiste('${id}')">
        <p>#${id}</p>
        <p>${texto}</p>
        <p><em>${joke.category}</em></p>
      </div>`;
  }

  return listaHTML;
}

function Home() {
  var root = document.getElementById("root");
  root.innerHTML = "";

  // Buscador
  const buscador = document.createElement("input");
  buscador.classList.add("c-buscador");
  buscador.type = "text";
  buscador.placeholder = "Buscar chiste...";
  buscador.addEventListener("input", () => {
    buscadorfuncion(buscador.value);
  });

  // Filtro por categoría
  const categorias = [
    "Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"
  ];

  const contenedorFiltro = document.createElement("div");
  contenedorFiltro.classList.add("tipos-container");

  for (let i = 0; i < categorias.length; i++) {
    const btn = document.createElement("button");
    btn.textContent = categorias[i];
    btn.addEventListener("click", () => {
      FiltroConexion(categorias[i]);
    });
    contenedorFiltro.appendChild(btn);
  }

  // Contenedor de lista
  const listaHTML = generarLista(pokemones);
  const contenedorLista = document.createElement("div");
  contenedorLista.classList.add("c-contenedor-lista");
  contenedorLista.id = "la-lista";
  contenedorLista.innerHTML = listaHTML;

  // Agregar todo al root
  root.appendChild(buscador);
  root.appendChild(contenedorFiltro);
  root.appendChild(contenedorLista);
}
