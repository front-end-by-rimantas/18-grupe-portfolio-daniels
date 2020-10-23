const clientNumbers = document.querySelectorAll('.counter');
const speed = 10;

// window.onscroll = numbersOnScroll();
function numbersOnScroll() {
    // window.onscroll = () => {
    const windowHeight = window.pageYOffset;
    const clientNumbersHeight = document.querySelector(".clientNumbers").offsetTop;
    // console.log(windowHeight);
    if (Math.round(windowHeight / 100) > Math.round((clientNumbersHeight / 100) - 5)) {
        // console.log(clientNumbers);
        for (const counter of clientNumbers) {
            // console.log(counter);
            let i = 0;
            const interval = setInterval(() => {

                let count = parseInt(counter.innerText);
                const target = parseInt(counter.getAttribute('data-target'));
                const loadSpeed = Math.floor(target / speed);
                count += loadSpeed;
                // console.log(count);
                if (count < target) {
                    counter.innerText = `${count}`;
                }
                else {
                    counter.innerText = `${target}`;
                    clearInterval(interval);
                }
            }, 50);
        }
        window.removeEventListener('scroll', numbersOnScroll);
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
