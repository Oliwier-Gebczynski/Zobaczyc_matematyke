const btnPrev = document.querySelector("#btnBefore");
const btnNext = document.querySelector("#btnNext");
const firstArticle = document.querySelector(".info");
const secondArticle = document.querySelector(".totient");
const thirdArticle = document.querySelector(".public");
const fourthArticle = document.querySelector(".publicEncry");
const fifthArticle = document.querySelector(".privKey");
const sixthArticle = document.querySelector(".decryption");

let i = 0;

const slides = [firstArticle, secondArticle , thirdArticle, fourthArticle, fifthArticle, sixthArticle];

btnNext.addEventListener("click", function(){
    if((i >= 0) != (i == slides.length - 1)){
        btnNext.disabled = false;
        btnPrev.disabled = false;
        btnPrev.style.display = "block";
        i += 1;
    }
    else if(i == slides.length - 1){
        btnNext.disabled = true;
    }
    window.scrollTo(0, 0);
    showNext(i);
})
//done
btnPrev.addEventListener("click", function(){
    if(i == 0){
        btnPrev.disabled = true;
    }
    else if(i > 0){
        btnNext.style.display = "block";
        btnPrev.disabled = false;
        btnNext.disabled = false;
        i -= 1;
    }
    window.scrollTo(0, 0);
    showPrev(i);
})

function showNext(index){
    const display = slides[i];
    const minusDisplay = slides[i - 1];
    minusDisplay.style.display = "none";
    display.style.display = "flex";
    if(slides.length - 1 == i){
        btnNext.style.display = "none";
    }
}

function showPrev(index){
    const display = slides[i];
    const minusDisplay = slides[i + 1];
    minusDisplay.style.display = "none";
    display.style.display = "flex";
    if(0 == i){
        btnPrev.style.display = "none";
    }
}

