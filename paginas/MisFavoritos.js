function MisFavoritos() {
  const root = document.getElementById("root");
  root.innerHTML = "";

  const contenedor = document.createElement("div");
  contenedor.classList.add("c-detalle");
  contenedor.innerHTML = `
    <h2>Mis Favoritos</h2>
    <p>Estos son los chistes que guardaste. Puedes hacer clic en cualquiera para ver el detalle.</p>
  `;

  const lista = document.createElement("div");
  lista.classList.add("c-contenedor-lista");

  const favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

  if (favoritos.length === 0) {
    lista.innerHTML = `<p style="text-align:center;">Aún no has guardado ningún chiste.</p>`;
  } else {
    favoritos.forEach(joke => {
      const texto = joke.type === "single" ? joke.joke : joke.setup;
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("c-mi-chiste");
      tarjeta.innerHTML = `
        <p>#${joke.id}</p>
        <p>${texto}</p>
        <p><em>${joke.category}</em></p>
      `;
      tarjeta.onclick = () => VerChiste(joke.id);
      lista.appendChild(tarjeta);
    });
  }

  root.append(contenedor, lista);
}

