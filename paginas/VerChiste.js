var esFavorito = false;

function toggleFavorito(id, category, type, joke, setup, delivery) {
  let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  let existe = favoritos.some(chiste => chiste.id === id);

  if (existe) {
    favoritos = favoritos.filter(chiste => chiste.id !== id);
    esFavorito = false;
  } else {
    favoritos.push({ id, category, type, joke, setup, delivery });
    esFavorito = true;
  }

  localStorage.setItem("favoritos", JSON.stringify(favoritos));

  const corazon = document.getElementById(`corazon-${id}`);
  if (corazon) {
    corazon.textContent = esFavorito ? "❤️" : "🤍";
  }
}

async function VerChiste(id) {
  const root = document.getElementById("root");
  root.innerHTML = "";

  const res = await fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`);
  const data = await res.json();

  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
  esFavorito = favoritos.some(chiste => chiste.id === data.id);

  let contenido = "";
  if (data.type === "single") {
    contenido = `<p>${data.joke}</p>`;
  } else {
    contenido = `<p>${data.setup}</p><p><strong>${data.delivery}</strong></p>`;
  }

  const detalle = document.createElement("section");
  detalle.classList.add("c-detalle");
  detalle.innerHTML = `
    <p><strong>Categoría:</strong> ${data.category}</p>
    <p><strong>Tipo:</strong> ${data.type}</p>
    ${contenido}
    <button id="btn-fav-${data.id}">
      <span id="corazon-${data.id}">${esFavorito ? "❤️" : "🤍"}</span> Guardar chiste
    </button>
  `;

  root.appendChild(detalle);

  // Activar el botón después de renderizar
  document.getElementById(`btn-fav-${data.id}`).onclick = () =>
    toggleFavorito(data.id, data.category, data.type, data.joke || "", data.setup || "", data.delivery || "");
}
