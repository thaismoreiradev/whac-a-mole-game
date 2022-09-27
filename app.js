//select html elements
const squares = document.querySelectorAll(".square")
const mole = document.querySelector(".mole")
const timeLeft = document.querySelector("#time-left")
const score = document.querySelector("#score")
const level = document.querySelector("#level")

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
        rules()
    }
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



const rules = () => {     

            if(result >= 3 ){
                alert("congrats")
                // here begins level 2
                result = 0
                score.textContent = result
                level.textContent = "Level 2"
                moveMole(600)
                currentTime = 10
                countDownTimerId = setInterval(countDown, 1000)
                
                    
                    if(result >= 3){
                        alert("starting level 3")
                        result = 0
                        score.textContent = result
                        level.textContent = "Level 3"
                        moveMole(400)
                        currentTime = 10
                        countDownTimerId = setInterval(countDown, 1000)

                    }


            }
            else{
                alert("GAME OVER, try faster next time")
            }

        
    }
    // if (currentTime ){
    //     level.textContent = "Level 2"
    //     clearInterval(countDownTimerId)
    //     clearInterval(timerId)
    //     alert("Congrats, play the next level")



    // }




