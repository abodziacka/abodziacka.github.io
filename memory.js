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


    /***REGISTER***/
    var ile=0;
    const form=document.getElementsByClassName("form");
    const name=document.getElementById("name");
    const surname=document.getElementById("surname");
    const email=document.getElementById("email");
    const password=document.getElementById("password");
    const secondPassword=document.getElementById("secondPassword");

    var nameError=document.getElementById("nameError");
    var surnameError=document.getElementById("surnameError");
    var emailError=document.getElementById("emailError");
    var passwordError=document.getElementById("passwordError");
    var secPassError=document.getElementById("secPassError");
    var error=document.getElementById("error");

    function validation(){

        NameValidation();
        SurnameValidation();
        EmailValidation();
        PasswordValidation();
        SamePass();

        if (ile===5){
            error.innerHTML("");
            alert("Utworzyłeś konto!");
        }
        else{
            error.innerHTML("Wszystkie pola muszą być uzupełnione!");
        }

    }
    

    

    function NameValidation(name){
        var im=/^[a-zA-Z ]{3,12}$/;

        document.addEventListener("input", function(){
            if(im.test(name)===false){
                name.style.border = "2px solid red";
                nameError.innerHTML = "Minimalna ilość znaków to 3, a maksymalna 12";
            }
            else{
                name.style.border = "2px solid green";
                nameError.innerHTML = "";
                ile+1;
    
            }
        })
        
    }


    function SurnameValidation(){
        var im2=/^[a-zA-Z ]{3,12}$/;

        if(im2.test(surname)===false){
            surname.style.border = "2px solid red";
            surnameError.innerHTML = "Minimalna ilość znaków to 3, a maksymalna 12";

        }
        else{
            surname.style.border = "2px solid green";
            surnameError.innerHTML = "";
            ile+1;

        }
    }

    function EmailValidation(){
        var em=/^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$/;
        if(em.test(email)===false){
            email.style.border = "2px solid red";
            emailError.innerHTML = "Niepoprawny email";

        }
        else{
            email.style.border = "2px solid green";
            emailError.innerHTML = "";
            ile+1;


        }
    }

    function PasswordValidation(){
        var haslo = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%\^&*_])(?:[a-zA-Z0-9!@#$%\^&*_]{8,12})$/;
        if(haslo.test(password)===false){
            password.style.border = "2px solid red";
            passwordError.innerHTML = "Niepoprawne haslo";

        }
        else{
            password.style.border = "2px solid green";
            passwordError.innerHTML = "";
            ile+1;


        }
    }

    function SamePass(){
        if(password===secondPassword){
            secondPassword.style.border = "2px solid red";
            secPassError.innerHTML = "Hasła muszą być takie same";

        }
        else{
            secondPassword.style.border = "2px solid green";
            secPassError.innerHTML = "";
            ile+1;

        }  
     }

