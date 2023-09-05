let cont = document.querySelector(".container");
let img = document.querySelector("img")


cont.addEventListener("mousemove" , (e)=>{

    img.style.transformOrigin = `${e.offsetX}px ${e.offsetY}px`;
    img.style.transform = `scale(1.5)`
})

cont.addEventListener("mouseleave" , (e)=>{

    img.style.transformOrigin = `center`;
    img.style.transform = `scale(1)`
})
