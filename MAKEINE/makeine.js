let playButton = document.getElementById("playButton")
let h1 = document.getElementById("playButton2")
let bottomtext = document.getElementById("bottomtext")
let firstDisplay = document.getElementsByClassName("firstDisplay")
let komari = document.getElementById("komari")
let socialId = document.getElementById("socials")
let socials = document.getElementsByClassName("socials")

let jumpCount = 0
// let body = document.getElementsByTagName("body")
let annaNorm = document.getElementById("annaNorm")

let hello = document.getElementById("hello")

let startAudio = new Audio("makeineop.mp3")
let clickAudio = new Audio("smash.wav")
let clickB = new Audio("button2.mp3")
let kill = new Audio("bwaan.mp3")

// clickB.currentTime = 0.000005

let canny1Audio = new Audio("canny1.mp3")
let canny2Audio = new Audio("canny2.mp3")
let canny3Audio = new Audio("canny3.mp3")
let cannyAudio = new Audio("canny.mp3")
clickAudio.volume = 0.2

//  canny1Audio.currentTime= 0.1
//  canny2Audio.currentTime= 0.1
//  canny3Audio.currentTime= 0.1
//  cannyAudio.currentTime= 0.1
    
let blinkToggle = true


// function blink(obj){
//     if (obj && blinkToggle){
//         obj.style.display = (obj.style.display == "block" ? "none" : "block")
//         setTimeout(function(){blink(obj)}, 400)
//     }
//     else{
//         obj.style.display = "block"
//     }
    
    
// }

function removeDisplay(){
    bottomtext.style.display = "none"
    playButton.style.display = "none"
    h1.style.display = "none"

}
function bounce(){
    annaNorm.style.transform = "translate(-50%, -150%)"
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


function start(){
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
    setTimeout(function(){annaNorm.classList.add("bounce")}, 1800)
    annaNorm.classList.add("annaNormBounce")
    hello.style.display = "block"


    annaNorm.addEventListener("click", jumping)
    

    
    
}

function jumping(){
    
    jumpCount += 1

    if (jumpCount % 5 === 0){
        annaNorm.src = "ANNAkill.png"
        annaNorm.style.filter = `contrast(1.4) brightness(0.9)`
        
        document.body.style.backgroundColor = "rgb(20, 30, 40)"
        console.log(kill.duration)
        
        let duration = parseFloat(kill.duration) * 1000 + 1000
        console.log(duration)
        kill.play()
        annaNorm.removeEventListener("click", jumping)
        annaNorm.classList.remove("annaNormBounce")
        annaNorm.style.animationPlayState = "paused"

        setTimeout(function(){
            annaNorm.addEventListener("click", jumping)
            annaNorm.classList.add("annaNormBounce")
        }
            
            , duration)
        
    }
    else{
        annaNorm.src = "ANNAinit.png"
        document.body.style.backgroundColor = "rgb(174, 206, 255)"
        annaNorm.style.animationPlayState = "initial"
        annaNorm.style.filter = ``
        clickB.play()
        clickB.currentTime = 0
    }

    // canny2Audio.play()
    
    annaNorm.classList.add("bounceUp");
    annaNorm.classList.add("newAnnaPos");
    annaNorm.classList.remove("bounce");
    setTimeout(function(){annaNorm.classList.remove("bounceUp")}
                ,200)
                   
      
}

function hoverSound(){
    console.log("over")
    clickB.play()
    clickB.currentTime = 0
}


setTimeout(
    function(){
        playButton.addEventListener("click", start)
        komari.addEventListener("click", hoverSound)

        console.log(window.innerWidth)
        console.log(window.innerHeight)
        
        // if(parseInt(window.innerWidth) < parseInt(window.innerHeight)){
        //     console.log("yes")
        //     socialId.style.width = "50%"
        // }

    }, 500)




