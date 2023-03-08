let secondCard;
let firstCard;
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message;
let messageEl = document.getElementById("message-alert");
let sumEl = document.getElementById("sumNumber");
let cardEl = document.getElementById("cardNum");

function randumNum() {
  let random = Math.floor(Math.random() * 10 + 1);
  if (random === 1) {
    return 11;
  } else {
    return random;
  }
}

function renderGame() {
  cardEl.textContent = `Cards:  `;
  if (sum <= 20) {
    message = "Do you want to drow a new card?";
  } else if (sum === 21) {
    message = "You've got Balackjack!";
    hasBlackjack = true;
  } else {
    isAlive = false;
    message = "You're out of the game!";
  }

  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += ` ${cards[i]}`;
  }

  sumEl.textContent = `Sum: ${sum}`;
  messageEl.textContent = message;
}
function startGame() {
  isAlive = true;
  firstCard = randumNum();
  secondCard = randumNum();
  cards = [firstCard, secondCard];
  sum = cards[0] + cards[1];
  renderGame();
}

function newGame() {
  if (isAlive && !hasBlackjack) {
    let card = randumNum();
    cards.push(card);
    sum += card;
    renderGame();
  }
}
