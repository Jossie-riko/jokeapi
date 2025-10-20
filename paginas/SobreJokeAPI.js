function SobreJokeAPI() {
  const root = document.getElementById("root");
  root.innerHTML = "";

  const contenedor = document.createElement("div");
  contenedor.classList.add("c-detalle");

  contenedor.innerHTML = `
    <h2>¿Qué es JokeAPI?</h2>
    <p>
      JokeAPI es una API pública que permite obtener chistes aleatorios de diferentes categorías como <strong>Programming</strong>, <strong>Misc</strong>, <strong>Dark</strong>, <strong>Pun</strong>, <strong>Spooky</strong> y <strong>Christmas</strong>.
    </p>
    <p>
      Esta app utiliza JokeAPI para mostrar chistes en tiempo real, filtrarlos por tipo y permitirte guardar tus favoritos. Los chistes están en inglés, pero puedes buscar por palabras clave o explorar por categoría.
    </p>
    <p>
      Puedes conocer más sobre la API en su sitio oficial: 
      <a href="https://jokeapi.dev" target="_blank">jokeapi.dev</a>
    </p>
  `;

  root.appendChild(contenedor);
}
