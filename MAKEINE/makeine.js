import {setupTypeWrite, typeWrite, startTyping, stopTyping} from "./makeineTYPING.js"


// GLOBAL CONSTANTS
let CALORIE_COUNT = 0
let STARTER_MONEY = 10

let currentMoney = 0

let jumpCount = 0
let blinkToggle = true
let testingBool = false


// IDS
let playButton = document.getElementById("playButton")
let h1 = document.getElementById("playButton2")
let bottomtext = document.getElementById("bottomtext")
let firstDisplay = document.getElementsByClassName("firstDisplay")

let komari = document.getElementById("komari")
let socialId = document.getElementById("socials")
let socials = document.getElementsByClassName("socials")

let annaNorm = document.getElementById("annaNorm")
let hello = document.getElementById("hello")
let textBubble = document.getElementById("textBubble")
// let body = document.getElementsByTagName("body")


// AUDIO
let startAudio = new Audio("assets/sounds/makeineop.mp3")
let clickAudio = new Audio("assets/sounds/smash.wav")
let clickB = new Audio("assets/sounds/button2.mp3")
let kill = new Audio("assets/sounds/bwaan.mp3")

let canny1Audio = new Audio("assets/sounds/canny1.mp3")
let canny2Audio = new Audio("assets/sounds/canny2.mp3")
let canny3Audio = new Audio("assets/sounds/canny3.mp3")
let cannyAudio = new Audio("assets/sounds/canny.mp3")


// INITIAL AUDIO SETTINGS
clickAudio.volume = 0.3
kill.volume = 0.5
// clickB.currentTime = 0.000005






// CODE STARTS HERE
function removeDisplay(){
    bottomtext.style.display = "none"
    playButton.style.display = "none"
    h1.style.display = "none"
}

export function hoverSound(){
    clickB.play()
    clickB.volume = 1
    clickB.currentTime = 0
}

function bounce(){
    annaNorm.style.transform = "translate(-50%, -150%)"
}
function hop(){
    annaNorm.classList.add("bounceUp");
    setTimeout(function(){
        annaNorm.classList.remove("bounceUp")
    }, 200)
}
// function canny(){
//     let x = Math.random()
//     console.log(x)
//     if (x>.66){
//         canny1Audio.play()
//         console.log("if")
//     }
//     else if (.66 >= x && x > .33){
//         canny2Audio.play()
//         console.log("elif1")
//     }
//     else if (.33 >= x && x > 0.01){
//         canny3Audio.play()
//         console.log("elif2")
//     }
//     else{
//         cannyAudio.play()
//         console.log("else")
//     }
// }

export function jumpCounter(){
    return jumpCount
}
export function start(){
    playButton.removeEventListener("click", start)
    playButton.removeEventListener("mouseover", start)
    playButton.classList.remove("hover")
    playButton.classList.add("flash")
    bottomtext.classList.add("flash")
    bottomtext.classList.remove("animate")

    clickAudio.play()
    
    setTimeout(function(){
        bottomtext.classList.add("hidden")
        h1.classList.add("hidden")
        playButton.classList.add("hidden")

        // document.addEventListener("click", canny)

    }, 900)
    
    setTimeout(function(){
        removeDisplay()
    }, 1600)

    setTimeout(function(){
        annaNorm.classList.add("bounce")

        

        setTimeout(function(){
            textBubble.style.display = "block"
            annaNorm.classList.remove("bounce")
            
            annaNorm.classList.add("newAnnaPos")
            hop()
            
                let x = startTyping(["bubbleText","anna_SPEECH_1"], 0)
                
        
                if (x=10) {
                    annaNorm.addEventListener("click", jumping)
                }
        }, 1200)

        }, 1800)
    
    

    annaNorm.classList.add("annaNormBounce")
    annaNorm.classList.add("annaStand")
     
}


function jumping(){  
    jumpCount += 1
    console.log(jumpCount)
    if (testingBool){
        if (jumpCount % 15 === 0){
            jumpCount = 0
            annaNorm.src = "assets/images/ANNAkill.png"
            annaNorm.style.filter = `contrast(1.1) brightness(0.8)`
            
            document.body.style.backgroundColor = "rgb(20, 30, 40)"
   
            
            let duration = parseFloat(kill.duration) * 1000 + 1000
     
            kill.play()
            annaNorm.removeEventListener("click", jumping)
            annaNorm.classList.remove("annaNormBounce")
            annaNorm.style.animationPlayState = "paused"

            setTimeout(function(){
                annaNorm.addEventListener("click", jumping)
                annaNorm.classList.add("annaNormBounce")
            }, duration)
            
        }
    }
    else{
        annaNorm.src = "assets/images/ANNAinit.png"
        document.body.style.backgroundColor = "rgb(174, 206, 255)"
        annaNorm.style.animationPlayState = "initial"
        annaNorm.style.filter = ``
        clickB.play()
        clickB.currentTime = 0
    }
    
    hop()
    annaNorm.classList.remove("bounce");

    setTimeout(function(){annaNorm.classList.remove("bounceUp")}
                ,200)
}








