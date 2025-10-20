function SobreJokeAPI() {
  const root = document.getElementById("root");
  root.innerHTML = `
    <section class="c-informativa">
      <h2>¿Qué es JokeAPI?</h2>
      <p>JokeAPI es una API gratuita que ofrece chistes de diferentes categorías como programación, humor negro, juegos de palabras, navideños y más.</p>
      <p>Esta app usa JokeAPI para mostrarte chistes aleatorios, filtrarlos por categoría, buscarlos por palabra clave y guardarlos como favoritos.</p>
      <p>Todos los chistes se obtienen en tiempo real desde <a href="https://jokeapi.dev" target="_blank">jokeapi.dev</a>, sin necesidad de registro ni pago.</p>
      <p>¡Explora, ríe y guarda tus favoritos!</p>
    </section>
  `;
}
