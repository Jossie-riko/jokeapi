var misIds = JSON.parse(localStorage.getItem("misIds")) || [];

function Aleatorios() {
  document.getElementById("nuevos").innerHTML = "";
  let chistesAleatorios = "";

  for (let i = 0; i < 4; i++) {
    let id = Math.floor(Math.random() * 1000) + 1;

    fetch(`https://v2.jokeapi.dev/joke/Any?idRange=${id}&blacklistFlags=nsfw,racist,sexist,explicit`)
      .then(res => res.json())
      .then(data => {
        let texto = data.type === "single" ? data.joke : data.setup;
        chistesAleatorios += `
          <div class="c-aleatorio" onclick="VerChiste('${data.id}')">
            <p>#${data.id}</p>
            <p>${texto}</p>
            <p><em>${data.category}</em></p>
          </div>`;

        if (!misIds.includes(data.id)) {
          misIds.push(data.id);
          localStorage.setItem("misIds", JSON.stringify(misIds));
          document.getElementById("c-mi-chiste-" + data.id).innerHTML = `
            <div onclick="VerChiste('${data.id}')">
              <p>${texto}</p>
            </div>`;
          document.getElementById("c-mi-chiste-" + data.id).classList.add("c-mi-chiste");
        }

        document.getElementById("nuevos").innerHTML = chistesAleatorios;
        document.getElementById("contador").innerHTML = `${misIds.length} chistes guardados`;
      });
  }
}

function MiColeccion() {
  document.getElementById("root").innerHTML = "";

  const seccionAleatorios = document.createElement("section");
  seccionAleatorios.classList.add("c-lista");
  seccionAleatorios.id = "nuevos";

  const boton = document.createElement("button");
  boton.textContent = "4 nuevos chistes";
  boton.addEventListener("click", () => {
    Aleatorios();
  });

  const seccionGuardados = document.createElement("section");
  seccionGuardados.classList.add("c-lista");

  let misChistes = "";
  for (let i = 1; i <= 1000; i++) {
    if (misIds.includes(i)) {
      misChistes += `
        <div class="c-mi-chiste poke-${i}" onclick="VerChiste('${i}')">
          <p>#${i}</p>
        </div>`;
    } else {
      misChistes += `<div class="c-unchiste" id="c-mi-chiste-${i}"><p>${i}</p></div>`;
    }
  }

  seccionGuardados.innerHTML = misChistes;

  const contador = document.createElement("p");
  contador.textContent = `${misIds.length} chistes guardados`;
  contador.id = "contador";

  document.getElementById("root").appendChild(contador);
  document.getElementById("root").appendChild(boton);
  document.getElementById("root").appendChild(seccionAleatorios);
  document.getElementById("root").appendChild(seccionGuardados);
}
