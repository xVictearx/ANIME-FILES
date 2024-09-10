// GLOBAL CONSTANTS
let buffer;
let typing = true;
let typingSpeed;
let speed;
let tagOpen;
let pos;
let entryContent;
let text;
let counter = 0;

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

// let body = document.getElementsByTagName("body")


// AUDIO
let type = new Audio("typing2.mp3")

type.volume = 0.6

function typingSound(){
    type.currentTime = 0
    type.play()
}

export function setupTypeWrite(textID) {
    pos = 0;
    typingSpeed = 70;
    
    entryContent = document.getElementById(textID)
    
    text = entryContent.innerHTML.replace(/\s+/g, ' ');
    buffer = text;
    entryContent.innerHTML = '';
    typing = true;
  }


export function typeWrite() {
    
    if (pos < text.length && typing) {
        if (text.charAt(pos) == '<') {
            tagOpen = true;
            speed = 0
        }

        if (!tagOpen) {
            entryContent.innerHTML += text.charAt(pos);
            speed = typingSpeed
            typingSound()    
            

        }

        if (text.charAt(pos) == '>') {
            tagOpen = false;
            entryContent.insertAdjacentHTML('beforeend', '<br>');
            
            
        }

        pos++;
        
        setTimeout(typeWrite, speed);

        
    }
    
    // else if(pos >= text.length && typing && counter < length){
    //     console.log("elseif    " + counter)
    //     counter++
        
    //     setupTypeWrite(textID, length)
    //     typeWrite(textID, length)
        
    // }
    
    
  }
  

export function startTyping(textId){
    setupTypeWrite(textId)
    typeWrite()
}

export function stopTyping() {
    let currentEntry = document.getElementById("bubbleText")
    currentEntry.innerHTML = buffer;
    typing = false;
}