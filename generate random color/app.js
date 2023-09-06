const body = document.querySelector("body");

setInterval(() => {
    body.style.backgroundColor = `rgb(${Math.floor((Math.random()*256))} ,
   ${Math.floor((Math.random()*256))} ,
   ${Math.floor((Math.random()*256))})` ;
}, 2000);
