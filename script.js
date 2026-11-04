const tabs = document.querySelectorAll("[data-tab]");
const panels = document.querySelectorAll(".panel");

// Função que mostra uma seção específica e esconde as outras.
function abrir(id, empurrar = true) {
  if (!document.getElementById(id)) id = "inicio";
  panels.forEach((p) => (p.hidden = p.id !== id));
  tabs.forEach((t) => t.setAttribute("aria-selected", t.dataset.tab === id));
  if (empurrar) history.replaceState(null, "", "#" + id);
  window.scrollTo({ top: 0 });
}

// Cada aba ativa uma seção da página ao ser clicada.
tabs.forEach((t) => t.addEventListener("click", () => abrir(t.dataset.tab)));

// Botões com data-go abrem uma seção relacionada diretamente.
document
  .querySelectorAll("[data-go]")
  .forEach((b) => b.addEventListener("click", () => abrir(b.dataset.go)));

// O logo volta para a página inicial ao clicar.
document
  .querySelector(".logo")
  .addEventListener("click", (e) => {
    e.preventDefault();
    abrir("inicio");
  });

// Abre a seção correspondente ao hash atual da URL, se houver.
abrir(location.hash.slice(1) || "inicio", false);

// Lista de curiosidades que aparece no bloco "Você sabia?"
const fatos = [
  "A luz do Sol leva cerca de 8 minutos e 20 segundos para chegar até a Terra. Você vê o Sol como ele era há pouco mais de 8 minutos.",
  "Existem mais estrelas no universo observável do que grãos de areia em todas as praias da Terra, segundo estimativas de astrônomos.",
  "O computador que ajudou a levar astronautas à Lua na missão Apollo 11 tinha cerca de 4 KB de memória RAM.",
  "A sonda Voyager 1, lançada em 1977, ainda envia dados de mais de 24 bilhões de quilômetros daqui.",
  "Um qubit, a unidade dos computadores quânticos, pode estar em uma combinação de 0 e 1 ao mesmo tempo.",
  "O GPS só é preciso porque os engenheiros corrigem o efeito da relatividade de Einstein no tempo dos satélites."
];

// Troca a curiosidade ao clicar no botão.
let n = 0;
document.getElementById("fact-btn").addEventListener("click", () => {
  n = (n + 1) % fatos.length;
  document.getElementById("fact-text").textContent = fatos[n];
});
