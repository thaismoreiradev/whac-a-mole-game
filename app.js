//select html elements
const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")
let level = document.querySelector("#level")
const modal = document.querySelector("#modal")
const buttonPlayAgain = document.querySelector("#play-again")
const levelTwoString = "Level 2"
const levelThreeString = "Level 3"
const levelWinner = "YOU WIN!"

//create variables
let result = null
let hitPosition
let currentTime = 11
let timerId = null
let countDownTimerId = null

//create functions
const randomSquare = () => {
    squares.forEach(square => {
        square.classList.remove("mole")
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add("mole")

    hitPosition = randomSquare.id
}

const moveMole = (time) => {
    timerId = setInterval(randomSquare, Number(time));
}








const countDown = () => {
    currentTime--
    timeLeft.textContent = currentTime  

    if(currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        if(result >= 1 && level.textContent == "Level 1"){
            startingLevelTwo()
        }
        else if (result >= 2 && level.textContent == levelTwoString){
            startingLevelThree()
        }
        else if(result >= 3 && level.textContent == levelThreeString){
            winningTheGame()
        }else {
            messageEnding("red", "GAME OVER BITCH")
            restartingGame("Try again")
        }
        
    }
}




const messageEnding = (background, string) => {
    modal.style.display = "block"
    modal.style.backgroundColor = background
    modal.textContent = string
}


const configuratingModal = (background, string) => {
    modal.style.display = "block"
    modal.style.backgroundColor = background
    modal.textContent = string
    setTimeout(() => {
        modal.style.display = "none"
    }, 5000);
}

const restartingGame = (string) => {
    buttonPlayAgain.style.display = "block"
    buttonPlayAgain.textContent = string
    buttonPlayAgain.addEventListener("click", () => location.reload())
}






const changingLevel = () => {
    result = 0
    score.textContent = result    
    currentTime = 11
    countDownTimerId = setInterval(countDown, 1000)
}



const startingLevelTwo = () => {


    configuratingModal ("pink", "Starting level 2")

      setTimeout(() => {        
        level.textContent = levelTwoString
        changingLevel()        
        moveMole(600)
    }, 5000)

    
}



const startingLevelThree = () => {

    configuratingModal ("blue", "Starting level 3")

    setTimeout(() => {
        level.textContent = levelThreeString
        moveMole(400)
        changingLevel()        
    }, 5000)
   
}




const winningTheGame = () => {

        messageEnding("GREEN", "YOU WIN!")
        restartingGame("Play again")  
}






squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }            
    })
})




moveMole(1000)
countDownTimerId = setInterval(countDown, 1000)