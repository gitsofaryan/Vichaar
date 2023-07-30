// JavaScript
const quoteText = document.querySelector('.quote');
const btn = document.querySelector('#new-quote');

async function newQuote() {
  var url = "https://api.adviceslip.com/advice";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok.');
    }

    const data = await response.json();
    const quote = data.slip.advice;

    quoteText.innerHTML = quote;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

btn.addEventListener('click', newQuote);

// Load initial quote on page load
newQuote();



