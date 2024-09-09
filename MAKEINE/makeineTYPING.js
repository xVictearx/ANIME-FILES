// GLOBAL CONSTANTS
let buffer;
let typing = true;
let typingSpeed;
let speed;
let tagOpen;
let pos;
let entryContent;
let text;


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
let type = new Audio("type.mp3")

function typingSound(){
    type.currentTime = 0.2
    type.play()
}

export function setupTypeWrite() {
    pos = 0;
    typingSpeed = 70;
    
    entryContent = document.getElementById("bubbleText")
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
            
            

        }

        if (text.charAt(pos) == '>') {
            tagOpen = false;
            entryContent.insertAdjacentHTML('beforeend', '<br>');
            
            
        }

        pos++;

        
        setTimeout(typeWrite, speed);
        
    }
  }

  export function stopTyping() {
    let currentEntry = document.getElementById("entry".concat(entryNum)).querySelector('.text');
    currentEntry.innerHTML = buffer;
    typing = false;
  }