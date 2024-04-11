let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2")

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game is started")
        started = true;
        levelUP();
    }
    
})


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 250)
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash");
    }, 250)
}

function levelUP(){
userseq = [];

    level++;
    h2.innerText = `Level ${level}`; 
    let randIdx = Math.floor(Math.random() * 3);
    let randClr = btns[randIdx];
    let randbtn = document.querySelector(`.${randClr}`);
    gameseq.push(randClr);
    console.log(gameseq)
    // console.log(randIdx);
    // console.log(randbtn);
    // console.log(randClr);
       //random btn choose
       gameFlash(randbtn); 
}

function checkAns(idx){
    // console.log("current level: ", level)
    if (userseq[idx] === gameseq[idx]){
       if(userseq.length == gameseq.length){
        setTimeout(levelUP, 1000)
       }
    } else {
        h2.innerHTML = `Game Over! your score was <b> ${level} </b> <br>  Press any key to start.`
        document.querySelector("body").style.backgroundcolor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundcolor= "white";
        }, 150)
        reset();
    }
   
}

function btnPress(){
    console.log(this)
    let btn = this;
    userFlash (btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor)

    checkAns(userseq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameseq= [];
    userseq = [];
    level = 0

}