const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = themeToggle.querySelector(".theme-icon");
const themeText = themeToggle.querySelector(".theme-text");
const temaSalvo = localStorage.getItem("tema");

function aplicarTema(tema) {
    const temaClaro = tema === "claro";

    document.body.classList.toggle("tema-claro", temaClaro);
    themeToggle.setAttribute("aria-pressed", String(temaClaro));
    themeToggle.setAttribute(
        "aria-label",
        temaClaro ? "Ativar tema escuro" : "Ativar tema claro"
    );
    themeIcon.textContent = temaClaro ? "🌙" : "☀️";
    themeText.textContent = temaClaro ? "Tema escuro" : "Tema claro";
}

aplicarTema(temaSalvo || "escuro");

themeToggle.addEventListener("click", () => {
    const novoTema = document.body.classList.contains("tema-claro") ? "escuro" : "claro";

    localStorage.setItem("tema", novoTema);
    aplicarTema(novoTema);
});

const formularioContato = document.querySelector("#form-contato");
const mensagemEnviada = document.querySelector("#mensagem-enviada");

formularioContato.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = formularioContato.elements.nome.value.trim();

    mensagemEnviada.textContent = "Obrigado, " + nome + "! Sua mensagem foi enviada com sucesso.";
    mensagemEnviada.classList.add("mensagem-sucesso");

    formularioContato.reset();
});