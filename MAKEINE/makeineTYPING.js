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

export function setupTypeWrite(textID, i) {
    pos = 0;
    typingSpeed = 70;
    
    entryContent = document.getElementById(textID[i])
    entryContent.classList.remove("displayOff")
    console.log(entryContent)
    text = entryContent.innerHTML.replace(/\s+/g, ' ');
    buffer = text;
    entryContent.innerHTML = '';
    typing = true;
  }
let index = 2
// let i =1
export function typeWrite(textId, i) {
    
    if (pos < text.length && typing) {
        if (text.charAt(pos) == '<') {
            tagOpen = true;
            speed = 0
        }

        if (!tagOpen) {
            speed = typingSpeed
            entryContent.innerHTML += text.charAt(pos);
            console.log("text.charAt(pos)=  " +   text.charAt(pos))
            typingSound()  
            

        }

        if (text.charAt(pos) == '>') {
            tagOpen = false;
            entryContent.insertAdjacentHTML('beforeend', '<br>');
            
            
        }

        pos++;
        
        setTimeout(function(){typeWrite(textId,i)}, speed);

        // console.log("i=  " +   i)
        // console.log("pos=  " +   pos)
        // console.log("text.l=  " +   text.length)
    }
    
    
    if (pos >= text.length){
        
        console.log("i= " +   i)
        console.log("done")
        console.log("textl=  " + textId.length)
        console.log(i + 1< text.length)
        if (i + 1<textId.length){
            i++
            
            
            startTyping(textId,i)
            // typeWrite(textId,i+1)
        }
       
    }
    
    
    
  }
  

export function startTyping(textId, start){
    setupTypeWrite(textId,start)
    typeWrite(textId,start)
}

export function stopTyping() {
    let currentEntry = document.getElementById("bubbleText")
    currentEntry.innerHTML = buffer;
    typing = false;
}