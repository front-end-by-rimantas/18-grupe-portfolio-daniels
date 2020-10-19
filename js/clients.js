const clientNumbers = document.querySelectorAll('.counter');
const speed = 900;


function numbersOnScroll() {
    const windowHeight = window.pageYOffset;
    const clientNumbersHeight = document.querySelector(".clientNumbers").offsetTop;
    if (Math.round(windowHeight / 100) > Math.round((clientNumbersHeight / 100) - 4)) {


        clientNumbers.forEach(counter => {
            function updateCount() {

                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const loadSpeed = target / speed;

                if (count < target && target !== 9450) {
                    counter.innerText = Math.ceil(count + loadSpeed);
                    setTimeout(updateCount, 1)
                } if (count < target && target == 9450) {
                    counter.innerText = Math.floor(count + loadSpeed);
                    setTimeout(updateCount, 1)
                }
                else {
                    target;
                }
            }
            updateCount()
        })
    }
};


export default numbersOnScroll;
// export default updateCount

// onscroll logikos pavyzdys

// let z = 0;
// window.onscroll = () => {

//     const windowHeight = window.pageYOffset;
//     const clientNumbersHeight = document.querySelector(".clientNumbers").offsetTop;

//     if (windowHeight > clientNumbersHeight && z < 1) {
//         z++;
//         updateCount();
//     }
//     if (windowHeight > clientNumbersHeight + 700) {
//         z = 0;
//     }
// }
