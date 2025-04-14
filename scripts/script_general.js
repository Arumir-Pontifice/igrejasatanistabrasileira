// script_general.js
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

setInterval(updateQuote, 7000); // Troca a cada 7 segundos