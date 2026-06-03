function oui() {
    document.body.innerHTML = `
    <div style="text-align:center;color:white;">
        <h1>🥰 Merci d'avoir dit OUI ! 🥰</h1>
        <h2>❤️ Je suis le plus heureux du monde ❤️</h2>
    </div>`;
}

function fuir() {
    let btn = document.getElementById("non");
    btn.style.position = "absolute";
    btn.style.left = Math.random() * 80 + "%";
    btn.style.top = Math.random() * 80 + "%";
}

function creerCoeur() {
    const coeur = document.createElement("div");
    coeur.classList.add("heart");
    coeur.innerHTML = "❤️";
    coeur.style.left = Math.random() * 100 + "vw";
    coeur.style.fontSize = (Math.random() * 20 + 20) + "px";
    document.body.appendChild(coeur);

    setTimeout(() => {
        coeur.remove();
    }, 5000);
}

setInterval(creerCoeur, 300);
