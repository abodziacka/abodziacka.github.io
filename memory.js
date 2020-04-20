var cards = document.querySelectorAll('.memory-card');
var hasFlippedCard = false;
var lockBoard = false;
var firstCard, secondCard;
var moveCount = 0;
var wins = 0;

function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flip');

    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;
        return;
    }

    secondCard = this;

    checkForMatch();

}

function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        this.wins++;
        disableCards();
        this.moveCount++;
        document.getElementById("game-score").innerHTML = this.moveCount;

        DoYouWin();
        return;
    }

    unflipCards();
}

function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);

    resetBoard();
}

function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
        resetBoard();
    }, 1000);

    this.moveCount++;
    document.getElementById("game-score").innerHTML = this.moveCount;
}

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}

(function shuffle() {
    cards.forEach(card => {
        var randomPos = Math.floor(Math.random() * 16);
        card.style.order = randomPos;
    });
})();

function DoYouWin() {
    if (this.wins === 8) {
        document.getElementById("button").style.display = "block";
        document.getElementById("brawo").style.display="block";
    
    }
    return;
}


function Reset(){
    this.cards = document.querySelectorAll('.memory-card');
    resetBoard();
    this.moveCount = 0;
    this.wins = 0;

    cards.forEach(card => {
		card.addEventListener('click', flipCard);
		card.classList.remove('flip');
	});
    document.getElementById("game-score").innerHTML = this.moveCount;
	document.getElementById("button").style.display = "none";
    document.getElementById("brawo").style.display="none";
    
}
cards.forEach(card => card.addEventListener('click', flipCard));


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }
