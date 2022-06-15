//navbar when scroll white 
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (scrollY >= 250) {
        navbar.classList.add('bg');
    } else {
        navbar.classList.remove('bg');
    }
})

//image collage blur 
const collageImages = [...document.querySelectorAll('.collage-img')]

collageImages.map((item, i) => {
    item.addEventListener('mouseover', () => {
        collageImages.map((image, index) => {
            if (index != i) {
                image.style.filter = `blur(10px)`;
                item.style.zIndex = 2;
            }
        })
    })
})