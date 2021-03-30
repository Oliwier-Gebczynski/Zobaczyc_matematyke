gsap.registerPlugin(ScrollTrigger);

const item = document.querySelectorAll('.main__item');

item.forEach(item => {
    gsap.fromTo(item.children, {
        y:"+=100",
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
            trigger: item,
            start: 'top 100%',
            scrub: 1,
        }
    })
})

