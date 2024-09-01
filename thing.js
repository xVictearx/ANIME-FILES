let x = 0
let width = 120
let height = 120
let kita = document.getElementById("kita")
let slider = document.getElementById("slider")
let text = document.getElementById("text")
slider.max =  width
slider.value =  slider.max
let shouldgrow = false

let audio = new Audio('ksfx.mp3')
let audio2 = new Audio('anxiety1.mp3')
console.log("Helloworld")
function grow(){
    if (shouldgrow){
        setTimeout(grow, 50);
        width = parseInt(width) + 20
        kita.style.width = `${width}px`
        console.log(width)
    }
    slider.max =  width
    slider.value =  slider.max
}
function handlemouse(){
    shouldgrow = true
    grow()

}
function handlemouseout(){
    shouldgrow = false
    

}
function setsize(){
  
    kita.style.width = `${slider.value}px`

}

function reset(){
    slider.max = 120
    kita.style.width = `${slider.max}px`
    width = 120

}

function growtext(){
    if(text.value === "kita"){
        console.log("kita")
        play1()
        kita2.style.display = `block`
        removeEv()
        setTimeout(function(){
            kita2.style.display = `none`
            enableEv()
        }
            ,3000)
    

    }
    if (!isNaN(text.value)){
        let newgrow = parseInt(text.value);
    
        // console.log(newgrow)
        // console.log(typeof slider.value)
        let sliderval = parseInt(slider.value)
        
        if (newgrow + sliderval >= parseInt(slider.max)){
            console.log(width)
            slider.max = newgrow + sliderval
            kita.style.width = `${newgrow + sliderval}px`
            slider.value = slider.max
            width = slider.max
            //console.log(newgrow + slider.value)
        }
        else{
            //console.log(slider.value)
            kita.style.width = `${newgrow + sliderval}px`
            
            slider.value = newgrow + sliderval
            //console.log(slider.value)
        }
    
    }
    
    

}
let percent = 0.0
function setcolour(){
    slider2.style.filter = `invert(${parseInt(slider2.value)/100})` 
    kita.style.filter = `invert(${parseInt(slider2.value)/100})` 
}

function play1(){
    audio.playbackRate= 0.9
    audio.currentTime = 0.2
    audio.play()
}
function play2(){
    
}
function popup(){
    console.log(text2.value)
    if (text2.value !== ""){
        console.log("popup")
        warning1.style.display = `block`
        audio2.play() 
        
        setTimeout(function(){
            warning1.style.display = `none`}
            ,4200)
        
       
        
       
    }
    
}
function enableEv(){
    
    slider2.addEventListener("input", setcolour)
    slider.addEventListener("input", setsize)
    kita.addEventListener("mouseover", handlemouse)
    kita.addEventListener("mouseout", handlemouseout)
    hed.addEventListener("click", play1)
    
}
function removeEv(){
    
    slider2.removeEventListener("input", setcolour)
    slider.removeEventListener("input", setsize)
    kita.removeEventListener("mouseover", handlemouse)
    kita.removeEventListener("mouseout", handlemouseout)
    hed.removeEventListener("click", play1)
    
}
enableEv()

// slider2.addEventListener("input", setcolour)
// slider.addEventListener("input", setsize)
// kita.addEventListener("mouseover", handlemouse)
// kita.addEventListener("mouseout", handlemouseout)
// hed.addEventListener("click", play1)
// hed.addEventListener("mouseover", audiplay)