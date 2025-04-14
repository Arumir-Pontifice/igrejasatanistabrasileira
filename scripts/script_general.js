document.addEventListener('DOMContentLoaded', () => {
  const quotes = [
  `"Tu és o altar sobre o qual tua vontade é celebrada."\n<hr class="quote-divider">\n— Bíblia da ISB`,
  `"Negar o céu é afirmar a terra."\n<hr class="quote-divider">\n— Arumir, 2024`,
  `"Não serviremos. E isso nos faz livres."\n<hr class="quote-divider">\n— Bíblia da ISB`,
  `"A carne é sagrada pois nela habita o eu soberano."\n<hr class="quote-divider">\n— Bíblia da ISB`,
  `"A dúvida é o fogo que depura a verdade."\n<hr class="quote-divider">\n— Cap. IV, Bíblia da ISB`,
  `"Satã não nos guia: nos inspira a guiar-nos por nós mesmos."\n<hr class="quote-divider">\n— Arumir`
];

  let current = 0;
  const container = document.getElementById('quote-container');

  function showQuote(index) {
    container.style.opacity = 0;
    setTimeout(() => {
      container.innerHTML = quotes[index].replace(/\n/g, "<br>");
      container.style.opacity = 1;
    }, 1000); // fade-out antes de mostrar nova
  }

  showQuote(current);
  setInterval(() => {
    current = (current + 1) % quotes.length;
    showQuote(current);
  }, 8000); // troca a cada 8 segundos
});