console.log("Welcome to Tic Tac Toe game1");
let music1 = new Audio("music.mp3");
let audioTurn1 = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3")
let turn1 = 'X';
let isGameActive = true;
let isEmpty;
let gameState = ['y','y','y','y','y','y','y','y','y']


let currentMove = 'X';

playGame();

function changeTurn1() {
    return turn1 === 'X' ? "O" : 'X';
}

function checkWin1() {
    let box = document.getElementsByClassName("box");

    let winPositions = [[0, 1, 2,5,5,0], [3, 4, 5,5,15,0], [6, 7, 8,5,25,0],
    [0, 3, 6,-10,15,90], [1, 4, 7,-5,15,90], [2, 5, 8,5,15,90],
    [0, 4, 8,0,15,45], [2, 4, 6,0,15,135]];

    // gameContainer = document.getElementsByClassName("gameContainer");
    winPositions.forEach((e) => {
        if ((box[e[0]].innerText === box[e[1]].innerText) && (box[e[1]].innerText === box[e[2]].innerText) && (box[e[1]].innerText === box[e[2]].innerText) &&
            (box[e[0]].innerText != "")) {

            document.getElementsByClassName("currentStatus")[0].innerText = box[e[0]].innerText + " Won";
            document.getElementById("imgBox").getElementsByTagName("img")[0].style.width = "10vw";
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
            if (e[5] == 45||135 ) {
                
                document.querySelector(".line").style.width = "30vw";
            }
            else{
                document.querySelector(".line").style.width = "20vw";

            }

            isGameActive = false;
            gameOver.play();


        };
    });

    let arrayBox = Array.from(box);
    
    for(let i = 0 ; i < arrayBox.length ; i++){
        isEmpty = false;

        if (arrayBox[i].innerText === '' || arrayBox[i].innerText === ' ') {
            isEmpty = true;
            break;
        }
    }

    if (!isEmpty && isGameActive  ) {
        isGameActive = false;     
        document.getElementsByClassName("currentStatus")[0].innerText = "Game tied..no one has won";
        gameOver.play();

    }
};


function playGame() {
    let boxClass = document.getElementsByClassName("boxClass");
    Array.from(boxClass).forEach(element => {
        let box = element.querySelector('.box');
        element.addEventListener('click', () => {
            if (box.innerText === '' && isGameActive) {
                box.innerText = turn1;
                turn1 = changeTurn1();
                audioTurn1.play();
                checkWin1();
                if (isGameActive) {

                    document.getElementsByClassName("currentStatus")[0].innerText = "Turn for " + turn1;
                }
            }
        })
    })
}

Reset.addEventListener("click", () => {
    let box = document.querySelectorAll(".box");
    Array.from(box).forEach(element => {
        element.innerText = '';
    });
    document.getElementById("imgBox").getElementsByTagName("img")[0].style.width = "0vw";
    isGameActive = true;
    turn1 = 'X';
    document.getElementsByClassName("currentStatus")[0].innerText = "Turn for " + turn1;
    document.querySelector(".line").style.width = "0vw";
    playGame();

});




