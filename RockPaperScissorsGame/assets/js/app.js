// Rules 
document.querySelector('.rules-btn').addEventListener("click",e=>{
    document.querySelector('.rules').style.display="block";
})
document.querySelector('.close').addEventListener("click",e=>{
    document.querySelector('.rules').style.display="none";
})

// Computer Choice
const choices = ["rock" , "paper" , "scissors"];
const randomChoice = Math.floor(Math.random()*choices.length);
const computerChoice =choices[randomChoice];

// User Choice
document.getElementById("user-choice").addEventListener("click" , play);

// Scorse and round
document.querySelector(".user-score").innerText=localStorage.getItem("userScore");
document.querySelector(".com-score").innerText=localStorage.getItem("comScore");
document.querySelector(".round").innerText=localStorage.getItem("round");

function play(e){

    const choiceBox = document.getElementById("user-choice");
    choiceBox.style.display = "none";

    // Create User Choice Element
    const result = document.querySelector(".result");
    const resultBox = document.createElement("ul");
    resultBox.classList = "resultBox";

    const userChoiceItems = document.createElement("li");
    userChoiceItems.classList = "choice-item";
    userChoiceItems.id = userChoice(e);
    const userChoiceText = document.createElement("p")
    userChoiceText.innerText = "Your Choice :";

    const userChoiceIcon = document.createElement("i");
    userChoiceIcon.classList ="fas fa-hand-"+userChoice(e);

    userChoiceItems.appendChild(userChoiceText);
    userChoiceItems.appendChild(userChoiceIcon);
    resultBox.appendChild(userChoiceItems);
    result.appendChild(resultBox);

    // Create Computer Choice Element
    const comChoiceItems = document.createElement("li");
    comChoiceItems.classList = "choice-item";
    comChoiceItems.id = computerChoice;

    const comChoiceText = document.createElement("p")
    comChoiceText.innerText = "Robot Choice :";

    const comChoiceIcon = document.createElement("i");
    comChoiceIcon.classList ="fas fa-hand-"+computerChoice;

    comChoiceItems.appendChild(comChoiceText);
    comChoiceItems.appendChild(comChoiceIcon);
    resultBox.appendChild(comChoiceItems);
    result.appendChild(resultBox);

    // Create Reset Btn
    const resetBtn=document.createElement("button");
    resetBtn.classList="reset-btn";
    resetBtn.innerText="Reset Game!";
    result.appendChild(resetBtn);
    resetBtn.addEventListener("click",function(){
        localStorage.setItem("round",1);
        localStorage.setItem("userScore",0);
        localStorage.setItem("comScore",0);
        window.location.reload();
    });

    // Create Round Btn
    const roundBtn=document.createElement("button");
    roundBtn.classList="round-btn";
    roundBtn.innerText="Another Round!";
    result.appendChild(roundBtn);
    roundBtn.addEventListener("click",e=>{
        let round;
        if(localStorage.getItem("round")=== null){
            round=1;
        }else{
            round =localStorage.getItem("round");
        }
        round ++;
        localStorage.setItem("round",JSON.stringify(round));
        window.location.reload();
    });
    
    // Check Result of Game
    const textResult =document.querySelector(".text-result");
    if ( userChoice(e) === computerChoice){
        textResult.innerText = "Tie!";
    } else if (userChoice(e) === "rock") {
        if (computerChoice === "scissors") {
            textResult.innerText = "You win!";
            userScore();
        } else {
            textResult.innerText = "You lose!";
            comScore();
        }
    } else if (userChoice(e) === "paper") {
        if (computerChoice === "rock") {
            textResult.innerText = "You win!";
            userScore();
        } else {
            textResult.innerText = "You lose!";
            comScore();
        }
    } else if (userChoice(e) === "scissors") {
        if (computerChoice === "paper") {
            textResult.innerText = "You win!";
            userScore();
        } else {
            textResult.innerText = "You lose!";
            comScore();
        }
    }
}

// Get User Choice
function userChoice(e){
    let userChoice;
    if(e.target.id === ""){
        userChoice= e.target.parentElement.id;
    }else{
        userChoice =e.target.id;
    }
    return userChoice;
}

// User Score
function userScore(){
    let userscore;
    if(localStorage.getItem("userScore")=== null){
        userscore=0;
    }else{
        userscore =localStorage.getItem("userScore");
    }
    userscore ++;
    localStorage.setItem("userScore",JSON.stringify(userscore));
    document.querySelector(".user-score").innerText=userscore;
    return userscore;
}

// Computer Score
function comScore(){
    let comscore;
    if(localStorage.getItem("comScore")=== null){
        comscore=0;
    }else{
        comscore =localStorage.getItem("comScore");
    }
    comscore ++;
    localStorage.setItem("comScore",JSON.stringify(comscore));
    document.querySelector(".com-score").innerText=comscore;
    return comscore;
}