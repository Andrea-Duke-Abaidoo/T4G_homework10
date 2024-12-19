let header = document.querySelector(".header")
header.style.backgroundColor ="blue"
header.style.color = "white"


let fir = document.querySelector(".fir")
function changeContent(){ 
fir.style.backgroundColor="grey"
fir.innerHTML = "I know now what the DOM is🙌"
fir.style.color = "black"
}
fir.addEventListener("click", changeContent)


let sec = document.getElementById("sec")
function changeColor(){
sec.style.backgroundColor = "yellow"
sec.innerHTML ="I know how to access/ select elements in the DOM👊"
sec.style.color = "black"
}
sec.addEventListener("dblclick", changeColor)



let thir = document.querySelector(".thir")
function changeBackgroundColor(){
thir.style.backgroundColor = "green"
thir.innerHTML = "I know how to use the style methods to change the style of an element in the DOM✅"
thir.style.color = "black"
}
thir.addEventListener("mouseenter", changeBackgroundColor)



let forth = document.querySelector(".forth")
function changeMovement(){
forth.style.backgroundColor = "purple"
forth.innerHTML = "I know how the styling properties differ in JS from CSS👍"
forth.style.color = "white"
}
forth.addEventListener("click", changeMovement)


let fif = document.getElementById("fif")
function changeExcitement(){
fif.style.backgroundColor = "black"
fif.innerHTML = "Yes I did it!! I manipulated the DOM and styled my elements😍😍😍😍"
fif.style.color = "white"
}
fif.addEventListener("dblclick", changeExcitement)


let open = document.querySelector(".open")
function openImage(){
    let image = document.querySelector(".image")
    image.style.display="block"
    let close = document.querySelector(".close")
    close.style.display="block"
    let open= document.querySelector(".open")
    open.style.display="none"
}

open.addEventListener("click", openImage)


let close = document.querySelector(".close")
function closeImage(){
    let image = document.querySelector(".image")
    image.style.display="none"
    let close = document.querySelector(".close")
    close.style.display="none"
    let open= document.querySelector(".open")
    open.style.display=" block"
}

close.addEventListener("click", closeImage)

