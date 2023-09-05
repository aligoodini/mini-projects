let $ = document;
const btn = $.querySelector("button");
const input = $.querySelector("input");
const wrapper = $.querySelector(".wrapper");
const img = $.querySelector("img")

btn.addEventListener("click" , ()=>{
    // delete spaces
    let inputValue = input.value.trim(); 

    if(inputValue !== ""){
        // give src to image
        img.setAttribute("src" , `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${inputValue}"`) 

        // give extra height to wrapper
        wrapper.classList.add("active");
    }

})

// remove image when input is empty
input.addEventListener("keyup" , ()=>{
    let inputValue = input.value.trim(); 

    if(inputValue == ""){
        wrapper.classList.remove("active");
        btn.innerHTML = "Generatre QR Code"
    }
})