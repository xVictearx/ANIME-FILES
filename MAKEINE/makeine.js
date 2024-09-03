let playButton = document.getElementById("playButton")
let h1 = document.getElementById("playButton2")
let bottomtext = document.getElementById("bottomtext")
let firstDisplay = document.getElementsByClassName("firstDisplay")
// let body = document.getElementsByTagName("body")
let placeholder = document.getElementById("placeholder")

let startAudio = new Audio("makeineop.mp3")
let clickAudio = new Audio("smash.wav")

let canny1Audio = new Audio("canny1.mp3")
let canny2Audio = new Audio("canny2.mp3")
let canny3Audio = new Audio("canny3.mp3")
let cannyAudio = new Audio("canny.mp3")
clickAudio.volume = 0.2

 canny1Audio.currentTime= 0.1
 canny2Audio.currentTime= 0.1
 canny3Audio.currentTime= 0.1
 cannyAudio.currentTime= 0.1
    
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

function pressStart(){
    

}
function canny(){
    let x = Math.random()
    console.log(x)
    if (x>.66){
        canny1Audio.play()
        console.log("if")
    }
    else if (.66 >= x && x > .33){
        canny2Audio.play()
        console.log("elif1")
    }
    else if (.33 >= x && x > 0.01){
        canny3Audio.play()
        console.log("elif2")
    }
    else{
        cannyAudio.play()
        console.log("else")
    }
}

function start(){
    playButton.classList.add("flash")
    bottomtext.classList.remove("animate")
    
    setTimeout(function(){
        bottomtext.classList.add("hidden")
        h1.classList.add("hidden")
        playButton.classList.add("hidden")

        document.addEventListener("click", canny)

        placeholder.style.opacity = 1

        
    }, 900)

    
    
    clickAudio.play()
    // for (let i = 0; i < firstDisplay.length; i++){
    //     console.log(i)
    //     firstDisplay[i].style.display = "none"
    // }
    
    playButton.removeEventListener("click", start)
    

    
}

setTimeout(
    function(){
        playButton.addEventListener("click", start)
        
    }, 500)



