let x = document.querySelector(".x")
let o = document.querySelector(".o")
let boxes = document.querySelectorAll(".box")
let buttons = document.querySelectorAll("#buttons-container button")
let messageContainer = document.querySelector("#message")
let messageText = document.querySelector("#message p")
let scondPlayer;


let player1 = 0
let player2 = 0


for(let i = 0; i < boxes.length; i++) {
    

    boxes[i].addEventListener("click", function() {
        
        let el = checkPlayer(player1, player2)


        if(this.childNodes.length == 0) {

            let cloneEl = el.cloneNode(true);
        
            this.appendChild(cloneEl)
            

            if(player1 == player2){
                player1++

                if(secondPlayer == 'ai-player'){
                   
                    computerPlayer()

                    player2++
                }
            }else{
                player2++
            }
        }

        checkWinPlayer()

    })
    
}

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function () {
        secondPlayer = this.getAttribute('id')

        for(let j = 0; j < buttons.length; j++){
            buttons[j].style.display = 'none'
        }

        setTimeout(function() {
            let container = document.querySelector('#container')
            container.classList.remove('hide')
        }, 300)
    })
}




function checkPlayer (player1, player2){

    if(player1 == player2){
        el = x
    } else{
        el = o
    }

    return el;
}

function checkWinPlayer() {
    let b1 = document.querySelector("#block-1")
    let b2 = document.querySelector("#block-2")
    let b3 = document.querySelector("#block-3")
    let b4 = document.querySelector("#block-4")
    let b5 = document.querySelector("#block-5")
    let b6 = document.querySelector("#block-6")
    let b7 = document.querySelector("#block-7")
    let b8 = document.querySelector("#block-8")
    let b9 = document.querySelector("#block-9")

    const b1Child = b1.firstElementChild?.className;
    const b2Child = b2.firstElementChild?.className;
    const b3Child = b3.firstElementChild?.className;
    const b4Child = b4.firstElementChild?.className;
    const b5Child = b5.firstElementChild?.className;
    const b6Child = b6.firstElementChild?.className;
    const b7Child = b7.firstElementChild?.className;
    const b8Child = b8.firstElementChild?.className;
    const b9Child = b9.firstElementChild?.className;

    //Horizontal
    if (b1Child === "x" && b2Child === "x" && b3Child === "x") declareWinner('x');
    if (b4Child === "x" && b5Child === "x" && b6Child === "x") declareWinner('x');
    if (b7Child === "x" && b8Child === "x" && b9Child === "x") declareWinner('x');

    if (b1Child === "o" && b2Child === "o" && b3Child === "o") declareWinner('o');
    if (b4Child === "o" && b5Child === "o" && b6Child === "o") declareWinner('o');
    if (b7Child === "o" && b8Child === "o" && b9Child === "o") declareWinner('o');

    //vertical
    if (b1Child === "x" && b4Child === "x" && b7Child === "x") declareWinner('x');
    if (b2Child === "x" && b5Child === "x" && b8Child === "x") declareWinner('x');
    if (b3Child === "x" && b6Child === "x" && b9Child === "x") declareWinner('x');o

    if (b1Child === "o" && b4Child === "o" && b7Child === "o") declareWinner('o');
    if (b2Child === "o" && b5Child === "o" && b8Child === "o") declareWinner('o');
    if (b3Child === "o" && b6Child === "o" && b9Child === "o") declareWinner('o');

    //Diagonal
    if (b1Child === "x" && b5Child === "x" && b9Child === "x") declareWinner('x');
    if (b3Child === "x" && b5Child === "x" && b7Child === "x") declareWinner('x');

    if (b1Child === "o" && b5Child === "o" && b9Child === "o") declareWinner('o');
    if (b3Child === "o" && b5Child === "o" && b7Child === "o") declareWinner('o');


    //deu velha

    let counter = 0

    for (let i = 0; i < boxes.length; i++) {
        if(boxes[i].childNodes[0] != undefined) {
            counter ++
        }

    }
    if(counter == 9 ) {
        declareWinner('Deu velha')
        
    }

}

function declareWinner(winner){
    let scoreboardX = document.querySelector('#scoreboard-1')
    let scoreboardO = document.querySelector('#scoreboard-2')
    let msg = ''

    if (winner == "x"){
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1
        msg = 'O jogador 1 venceu'
    }else if (winner == "o"){
        scoreboardO.textContent = parseInt(scoreboardX.textContent) + 1
        msg = 'O jogador 2 venceu'
    }else {
        msg = 'Deu velha'
    }

    messageText.innerHTML = msg
    messageContainer.classList.remove("hide")
    
    setTimeout(function (){
        messageContainer.classList.add('hide')
    }, 2000)

    player1 = 0
    player2 = 0

    let boxesToRemove = document.querySelectorAll(".box div")

    for(let i = 0; i < boxesToRemove.length; i++){
        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i])
    }

}


function computerPlayer() {
    let cloneO = o.cloneNode(true)

    counter = 0
    filled = 0

    for(let i = 0; i < boxes.length; i++){
        let randomNumber = Math.floor(Math.random() * 5)

        if(boxes[i].childNodes[0] == undefined){
            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++
                break
            }
        }else{
            filled++
        }
    }

    if(counter == 0 && filled < 9){
        computerPlayer();
    }

}





