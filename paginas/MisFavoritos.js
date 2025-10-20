function MisFavoritos() {
    let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
    if (favoritos.length === 0) {
        document.getElementById("root").innerHTML = "No hay chistes guardados 😢";
    } else {
        let listaHTML = "";
        for (let i = 0; i < favoritos.length; i++) {
            let chiste = favoritos[i];
            let texto = chiste.type === "single" ? chiste.joke : chiste.setup;
            listaHTML += `
            <div class="c-chiste" onclick="VerChiste('${chiste.id}')">
                <p>#${chiste.id}</p>
                <p>${texto}</p>
                <p><em>${chiste.category}</em></p>
            </div>`;
        }
        document.getElementById("root").innerHTML = listaHTML;
    }
}
