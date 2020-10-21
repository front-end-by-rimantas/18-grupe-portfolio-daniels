import renderSingleClients from './renderSingleClients.js';

function renderClients(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const clientSlide = data[i];
        HTML += renderSingleClients(clientSlide);
    }
    const clientsDOM = document.getElementsByClassName('renderClients')[0];
    clientsDOM.innerHTML += HTML;
}
// function pirmasDot() {
//     document.querySelector(".testimonials").style.marginLeft = "0%";
// }
// function antrasDot() {
//     document.querySelector(".testimonials").style.marginLeft = "-95%";
// }
// function treciasDot() {
//     document.querySelector(".testimonials").style.marginLeft = "-192%";
// }
// const dot1 = document.querySelector(".dot1");
// const dot2 = document.querySelector(".dot2");
// const dot3 = document.querySelector(".dot3");
// dot1.addEventListener('click' pirmasDot);
// dot2.addEventListener('click' antrasDot);
// dot3.addEventListener('click' treciasDot);



export default renderClients;