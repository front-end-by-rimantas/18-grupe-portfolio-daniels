function aboutOnScroll() {
    let heightAdd = -100;
    if (window.innerWidth < 1200) { heightAdd = 400; }
    const homeHeight = document.querySelector(`.container .home`).offsetHeight + heightAdd;
    if (homeHeight < pageYOffset) {
        for (let i = 0; i < 3; i++) {
            document.querySelectorAll(`.barwidth`)[i].style.width = '100%';
        }
    }
}

export { aboutOnScroll }