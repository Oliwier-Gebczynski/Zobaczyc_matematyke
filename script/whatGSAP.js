gsap.registerPlugin(ScrollTrigger);

const item = document.querySelectorAll('.main__item');

item.forEach(item => {
    gsap.fromTo(item.children, {
        y:"-=200",
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: item,
            start: 'top 120%',
            scrub: 0,
        }
    })
})

