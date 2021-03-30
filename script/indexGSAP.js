gsap.from('.article', {
    opacity: 0, 
    duration: 1, 
    y:-50, 
    ease: 'easeInOut',
});
gsap.from('.article__title', {opacity: 0, duration: 1, x:-300, ease: 'easeInOut'});
gsap.from('.container', {backgroundPosition: '100% -300%', duration: 1, opacity: 0});
gsap.from('.header', {delay: 1, opacity:0, y: '-50px', ease: 'easeInOut'});