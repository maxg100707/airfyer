document.getElementById("startButton").addEventListener("click", executar);

function executar() {
  const app = document.getElementById("app");
  const perguntas = [
    { texto: "Tem dinheiro", sim: "compra la airfrayr", nao: "next1" },
    { texto: "Você tem um trabalho?", sim: "next2", nao: "next3" },
    {
      texto: "Eles te pagam?",
      sim: "Compre uma Airfryer!",
      nao: "next4",
    },
    {
      texto: "Você tem posses?",
      sim: "Venda elas e compre uma Airfryer!",
      nao: "next5",
    },
    {
      texto: "Você tem alma?",
      sim: "Venda sua alma e compre uma Airfryer!",
      nao: "Mentira! Venda sua alma e compre uma Airfryer!",
    },
  ];
  let indice = 0;
  function mostrar() {
    const pergunta = perguntas[indice];
    app.innerHTML = `
    <p class="question">${pergunta.texto}</p>
    <button id="sim">Sim</button>
    <button id="nao">Nao</button>
    `;
    document
      .getElementById("sim")
      .addEventListener("click", () => processar("sim", pergunta));
    document
      .getElementById("nao")
      .addEventListener("click", () => processar("nao", pergunta));
  }
  function processar(resposta, pergunta) {
    if (pergunta[resposta].startsWith("next")) {
      indice = parseInt(pergunta[resposta].replace("next", ""));
      mostrar();
    } else {
      app.innerHTML = `<p class="question">${pergunta[resposta]}</p>`;
    }
  }
  mostrar();
}
