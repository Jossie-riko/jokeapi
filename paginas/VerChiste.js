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

    const boton = document.querySelector(`#corazon-${id}`);
    if (boton) boton.textContent = esFavorito ? "❤️" : "🤍";
}

async function VerChiste(id) {
    const root = document.getElementById("root");
    root.innerHTML = "";

    const res = await fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${id}`);
    const data = await res.json();

    esFavorito = (JSON.parse(localStorage.getItem("favoritos")) || []).some(chiste => chiste.id === data.id);

    let contenido = "";
    if (data.type === "single") {
        contenido = `<p>${data.joke}</p>`;
    } else {
        contenido = `<p>${data.setup}</p><p><strong>${data.delivery}</strong></p>`;
    }

    const detalle = `
    <section class="c-detalle">
        <p><strong>Categoría:</strong> ${data.category}</p>
        <p><strong>Tipo:</strong> ${data.type}</p>
        ${contenido}
        <button onClick="toggleFavorito(${data.id}, '${data.category}', '${data.type}', '${data.joke || ""}', '${data.setup || ""}', '${data.delivery || ""}')">
            <span id="corazon-${data.id}">${esFavorito ? '❤️' : '🤍'}</span> Guardar chiste
        </button>
    </section>
    `;

    root.innerHTML = detalle;
}
