import {start, hoverSound, jumpCounter} from "./makeine.js"
import { typeWrite, setupTypeWrite, stopTyping } from "./makeineTYPING.js"
let flag = false

// STARTUP MENU SCREEN
setTimeout(
    function(){
        playButton.addEventListener("click", start)
        komari.addEventListener("click", hoverSound)
    }, 500)



// document.body.addEventListener( "click", stopTyping)