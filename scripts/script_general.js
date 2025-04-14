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

const quotes = [
  {
    text: "A carne é sagrada quando consciente.",
    source: "Bíblia da ISB, Cap. II"
  },
  {
    text: "Não há céu sobre ti, nem inferno sob teus pés — só o agora, e o que tu fazes dele.",
    source: "Bíblia da ISB, Cap. I"
  },
  {
    text: "A dúvida é o incenso da razão.",
    source: "Bíblia da ISB, Cap. IV"
  },
  {
    text: "Satã não exige adoração, mas consciência.",
    source: "Doutrina ISB"
  }
];

let current = 0;
const quoteEl = document.getElementById('carousel-quote');

function updateQuote() {
  const quote = quotes[current];
  quoteEl.innerHTML = `
    <blockquote>
      <p>"${quote.text}"</p>
      <hr />
      <cite>— ${quote.source}</cite>
    </blockquote>
  `;
  quoteEl.style.opacity = 0;
  setTimeout(() => {
    quoteEl.style.opacity = 1;
  }, 300);

  current = (current + 1) % quotes.length;
}

setInterval(updateQuote, 7000); // troca a cada 7s

// Carrega navbar e footer automaticamente
window.addEventListener("DOMContentLoaded", () => {
  fetch('/partials/navbar.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;
    });

  fetch('/partials/footer.html')
    .then(res => res.text())
    .then(data => {
      document.getElementById('footer-placeholder').innerHTML = data;
    });
});