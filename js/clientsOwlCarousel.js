$('.sliding').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// const clientNumbers = document.querySelectorAll('.counter');
// const speed = 600;


// let z = 0;
// window.onscroll = () => {

//     const windowHeight = window.pageYOffset;
//     const clientNumbersHeight = document.querySelector(".clientNumbers").offsetTop;

//     if (windowHeight > clientNumbersHeight && z < 1) {
//         z++;
//         console.log("suveiks");
//     }
//     if (windowHeight > clientNumbersHeight + 700) {
//         z = 0;
//     }
// }