let displayBox = document.querySelector('.display');

let list = document.querySelectorAll('.show-display');
list.forEach(item => {
    item.addEventListener('click' , showDisplay)
})

function showDisplay(event){
    const target = event.target.innerText;
    if ( displayBox.innerHTML == 0 ){
        return displayBox.innerHTML = target;
    }else{
        return displayBox.innerHTML += target;
    }
}

document.querySelector(".all-clear").addEventListener("click", allClear);
function allClear(){
    displayBox.innerHTML=0;
}

document.querySelector(".clear-last").addEventListener("click",clearLast);
function clearLast(){
    let text = displayBox.innerText;
    if ( text.length === 1){
        return displayBox.innerText=0;
    }else{
        return displayBox.innerText = text.substring(0, text.length-1);
    }
}

document.querySelector(".calculate").addEventListener("click", calculate);
function calculate(){
    let result = displayBox.innerText;
    return displayBox.innerText = eval(result);
}