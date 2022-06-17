const secretPhrases = ["Never", "Bullet", "Become peaceful", "Persian" , "Harry Potter", "John Snow"];

let randomItem = "";
let clicked = [];
let result = "";
let mistakes = 0;

const reset =document.querySelector(".reset-btn");
reset.addEventListener("click",function(){
    window.location.reload();
});

function selectRandomItem(){
    randomItem = secretPhrases[Math.floor(Math.random() * secretPhrases.length)];
    document.getElementById("letters").addEventListener("click",buttonHandler);
    window.addEventListener("keydown",keyHandler);
    // console.log(randomItem);
}

function setUnderScore(){
    let splitedWord = randomItem.split("");
    let mappedWord = splitedWord.map(function (letter){
        if(letter === " "){
            return " ";
        }else if(clicked.indexOf(letter.toLowerCase()) >=0){
            return letter;
        }else{
            return "_";
        }
    });
    result = mappedWord.join("");
    document.getElementById("clue").innerHTML = `<p>${result}</p>`
}

function checkIfWon(){
    if ( randomItem === result){
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("image").querySelector("img").src ="assets/img/winner.png"
    }
}

function checkIflost(){
    if (mistakes === 6){
        document.getElementById("gameover").querySelector("p").style.display = "block";
        document.getElementById("clue").innerHTML = `<p>Anwser is: ${randomItem}</p>`
    }
}

function updateHangmanPicture(){
    const image = document.getElementById("image").querySelector("img");
    image.src =`assets/img/hangman${mistakes}.png`;
}

function letterHandler(letter){
    letter = letter.toLowerCase();
    clicked.indexOf(letter) === -1 ? clicked.push(letter) : null ;
    document.getElementById(letter.toUpperCase()).className = "used";
    if(randomItem.toLowerCase().indexOf(letter) >=0){
        setUnderScore();
        checkIfWon();
    }else if (randomItem.toLowerCase().indexOf(letter) === -1 ){
        mistakes++;
        checkIflost();
        updateHangmanPicture();
    }
}

function buttonHandler(event){
    letterHandler(event.target.id)
}
function keyHandler(event){
    letterHandler(event.key);
}

selectRandomItem();
setUnderScore();