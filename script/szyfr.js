const btnPrev = document.querySelector("#btnBefore");
const btnNext = document.querySelector("#btnNext");
const firstArticle = document.querySelector(".info");
let i = 0;

const slides = [firstArticle,2 ,2, ,2, 2, ,2 ,2, 2];

btnNext.addEventListener("click", function(){

    if((i >= 0) != (i == slides.length - 1)){
        btnNext.disabled = false;
        btnPrev.disabled = false;
        i += 1;
    }
    else if(i == slides.length - 1){
        btnNext.disabled = true;
    }

    console.log(i)
    //showNext(i);
})

//done
btnPrev.addEventListener("click", function(){
    if(i == 0){
        btnPrev.disabled = true;
    }
    else if(i > 0){
        btnPrev.disabled = false;
        btnNext.disabled = false;
        i -= 1;
    }
    console.log(i)
    //show(i);
})

function showNext(index){
    const display = slides[i];
    const minusDisplay = slides[i - 1];
    minusDisplay.style.display = "none";
    display.style.display = "flex";
}

