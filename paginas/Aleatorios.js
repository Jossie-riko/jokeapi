async function MiColeccion() {
  const root = document.getElementById("root");
  root.innerHTML = "";

  const contenedor = document.createElement("div");
  contenedor.classList.add("c-detalle");

  contenedor.innerHTML = `
    <h2>Chistes Aleatorios</h2>
    <p>Estos chistes se seleccionan al azar desde JokeAPI. ¡Cada vez que entres aquí, verás algo diferente!</p>
  `;

  const lista = document.createElement("div");
  lista.classList.add("c-contenedor-lista");

  const resultado = await conexionLista("Any");

  resultado.forEach(joke => {
    const texto = joke.type === "single" ? joke.joke : joke.setup;
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("c-aleatorio");
    tarjeta.innerHTML = `
      <p>#${joke.id}</p>
      <p>${texto}</p>
      <p><em>${joke.category}</em></p>
    `;
    tarjeta.onclick = () => VerChiste(joke.id);
    lista.appendChild(tarjeta);
  });

  root.append(contenedor, lista);
}
