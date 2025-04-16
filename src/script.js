// /src/script.js

// Lista de saudação + frase
const saudações = [
  "Saudações, viajante do conhecimento. 'Tu és o fogo oculto que desafia as trevas da ignorância.'",
  "Bem-vindo à verdade. 'Desperta, viajante do caos — teu templo é o teu próprio ser.'",
  "Saudações. 'A verdade não te será dada — tu a forjarás com tua própria vontade.'",
  "Bem-vindo à jornada. 'A liberdade começa quando cessa a adoração do invisível.'",
  "Saudações, irmão/sister. 'Caminha entre os homens como deus de ti mesmo.'",
  "Bem-vindo à luz da consciência. 'Não temas o abismo — tu és o abismo que observa.'",
  "Saudações, ser eterno. 'A rebelião é o primeiro suspiro da consciência desperta.'",
  "Bem-vindo à nossa ordem. 'O altar é teu corpo. A oração, tua ação.'",
  "Saudações. 'A escuridão não é ausência de luz, é presença de essência.'",
  "Bem-vindo à sabedoria. 'Nada é sagrado — exceto tua própria existência.'"
];

// Função para escolher uma saudação aleatória
function gerarSaudacao() {
  const index = Math.floor(Math.random() * saudações.length);
  return saudações[index];
}

// Exibir a saudação no elemento com id "saudacao"
document.addEventListener('DOMContentLoaded', function() {
  const saudacaoElement = document.getElementById('saudacao');
  if (saudacaoElement) {
    saudacaoElement.innerText = gerarSaudacao();
  }
});1