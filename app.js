//select html elements
const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")
let level = document.querySelector("#level")
const modal = document.querySelector("#modal")
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
            levelTwo()
        }
        else if (result >= 2 && level.textContent == levelTwoString){
            levelThree()
        }
        else if(result >= 3 && level.textContent == levelThreeString){
            finishGame()
        }else {
            // alert("GAME OVER")
            modalConfig ("red", "GAME OVER BITCH")
        }
        
    }
}




const modalConfig = (background, string) => {
    modal.style.display = "block"
    modal.style.backgroundColor = background
    modal.textContent = string
    setTimeout(() => {
        modal.style.display = "none"
    }, 5000);
}





const levelTwo = () => {


    modalConfig ("pink", "Starting level 2")

      setTimeout(() => {

        result = 0
        score.textContent = result
        level.textContent = levelTwoString
        moveMole(600)
        currentTime = 10
        countDownTimerId = setInterval(countDown, 1000)


    }, 5000)

    
}



const levelThree = () => {

        // alert("starting level 3")
        modalConfig ("blue", "Starting level 3")

     setTimeout(() => {

        result = 0
        score.textContent = result
        level.textContent = levelThreeString
        moveMole(400)
        currentTime = 10
        countDownTimerId = setInterval(countDown, 1000)


        
    }, 5000)
   
}




const finishGame = () => {

        modalConfig ("GREEN", "YOU WIN!")

    setTimeout(() => {

        result = 0
        score.textContent = result
        level.textContent = levelWinner
        moveMole(1000)
        currentTime = 10
        countDownTimerId = setInterval(countDown, 1000)

        }, 5000)
  
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