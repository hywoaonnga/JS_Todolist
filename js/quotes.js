const quotes = [
  {
    quote: "Sun",
  },
  {
    quote: "Mercury",
  },
  {
    quote: "Venus",
  },
  {
    quote: "Earth",
  },
  {
    quote: "Mars",
  },
  {
    quote: "Jupiter",
  },
  {
    quote: "Saturn",
  },
  {
    quote: "Uranus",
  },
  {
    quote: "Neptune",
  },
  {
    quote: "Pluto",
  },
];

const quote = document.querySelector("#quote span:first-child");

// Math.random(): 0~1 사이의 랜덤한 값.
const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
