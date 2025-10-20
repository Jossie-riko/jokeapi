function buscadorfuncion(valor) {
  if (valor.length >= 3) {
    const filtrados = chistes.filter(joke =>
      (joke.joke || "").toLowerCase().includes(valor.toLowerCase()) ||
      (joke.setup || "").toLowerCase().includes(valor.toLowerCase()) ||
      (joke.delivery || "").toLowerCase().includes(valor.toLowerCase())
    );
    document.getElementById("la-lista").innerHTML = generarLista(filtrados);
  } else {
    document.getElementById("la-lista").innerHTML = generarLista(chistes);
  }
}

function generarLista(arrayJokes) {
  return arrayJokes.map(joke => {
    const texto = joke.type === "single" ? joke.joke : joke.setup;
    return `
      <div class="c-chiste" onclick="VerChiste('${joke.id}')">
        <p>#${joke.id}</p>
        <p>${texto}</p>
        <p><em>${joke.category}</em></p>
      </div>`;
  }).join("");
}

function Home() {
  const root = document.getElementById("root");
  root.innerHTML = "";

  const buscador = document.createElement("input");
  buscador.classList.add("c-buscador");
  buscador.type = "text";
  buscador.placeholder = "Buscar chiste...";
  buscador.addEventListener("input", () => buscadorfuncion(buscador.value));

  const categorias = ["Programming", "Misc", "Dark", "Pun", "Spooky", "Christmas"];
  const contenedorFiltro = document.createElement("div");
  contenedorFiltro.classList.add("tipos-container");

  categorias.forEach(cat => {
    const btn = document.createElement("button");
    btn.textContent = cat;
    btn.onclick = () => FiltroConexion(cat);
    contenedorFiltro.appendChild(btn);
  });

  const contenedorLista = document.createElement("div");
  contenedorLista.classList.add("c-contenedor-lista");
  contenedorLista.id = "la-lista";
  contenedorLista.innerHTML = generarLista(chistes);

  root.append(buscador, contenedorFiltro, contenedorLista);
}
