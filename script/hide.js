const nav = document.querySelector("#nav");
const button = document.querySelector("#navButton");

button.addEventListener("click", function(){
    if(nav.classList.contains("display")==false && nav.classList.contains("hide")==false ){
        nav.classList.add("display");
        return;
    }
    else if (nav.classList.contains("display")==true && nav.classList.contains("hide")==false) {
        nav.classList.remove("display");
        nav.classList.add("hide");
        setTimeout(()=>{
            nav.classList.remove("hide");
        }, 1000);
        return;
    } 
})

