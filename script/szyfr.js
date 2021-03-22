const btnPrev = document.querySelector("#btnBefore");
const btnNext = document.querySelector("#btnNext");
let i = 0;
const slides = [1, 2, 3, 4, 5, 6, 7, 8, 9];

btnNext.addEventListener("click", function(){
    
    if((i >= 0) != (i == slides.length - 1)){
        btnNext.disabled = false;
        btnPrev.disabled = false;
        i += 1;
    }else if(i == slides.length - 1){
        btnNext.disabled = true;
    }
    console.log(i);
})

//done
btnPrev.addEventListener("click", function(){
    
    if(i == 0){
        btnPrev.disabled = true;
    }else if(i > 0){
        btnPrev.disabled = false;
        btnNext.disabled = false;
        i -= 1;
    }

    console.log(i);
})



