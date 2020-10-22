// const dot1 = document.querySelector(".dotsBtn1")
// const dot2 = document.querySelector(".dotsBtn2")
// const dot3 = document.querySelector(".dotsBtn3")


// function renderTestimonials() {
//     const dot2 = document.querySelector(".dotsBtn2");
//     const dot1 = document.querySelector(".dotsBtn1");
//     const dot3 = document.querySelector(".dotsBtn3");
//     dot1.addEventListener('click', pirmaSkaidre)
//     dot2.addEventListener('click', antraSkaidre)
//     dot3.addEventListener('click', treciaSkaidre)
// }

// // dot2.addEventListener('click', pirmaSkaidre)

// function pirmaSkaidre() {
//     return document.querySelector(".clientOne").style.marginLeft = "calc(300px)";
// }
// function antraSkaidre() {
//     return document.querySelector(".clientOne").style.marginLeft = "calc(300px - 34.2%)";
// }
// function treciaSkaidre() {
//     return document.querySelector(".clientOne").style.marginLeft = "calc(300px - 68%)";
// }



// import renderSingleClients from './renderSingleClients.js';
// import renderClients from './renderClients.js';

// function renderTestimonials(target, data) {
//     const DOM = document.querySelector(target);
//     let testimonialsHTML = '';
// for (let i = 0; i < data.length; i++) {
//     HTML += generateTestimonials(data[i]);
// }
// const random = Math.random() * data.length;
// HTML = generateTestimonials(data[Math.random()]);

//     const middleIndex = Math.floor(data.length / 2);

//     console.log();

//     const HTML = renderSingleClients();

//     document.querySelector(target).innerHTML = HTML;
//     return;
// }
// function generateTestimonials() {
//     let HTML = 'hello';

// }

// function renderClients(data) {
//     let HTML = '';
//     for (let i = 0; i < data.length; i++) {
//         const clientSlide = data[i];
//         HTML += renderSingleClients(clientSlide);
//     }
//     const clientsDOM = document.getElementsByClassName('renderClients')[0];
//     clientsDOM.innerHTML += HTML;
// }



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




function renderTestimonials(data) {
    let totalItems = data.length;
    const widthItem = (document.querySelectorAll('.clientSlide')[0].offsetWidth) * totalItems * 3;

    // document.querySelector('.renderClients').style.width = `${widthItem}px`;
    for (let i = 0; i < totalItems; i++) {
        document.querySelector('.clients .nav').innerHTML += `<i class="fa fa-circle" aria-hidden="true"></i>`;

    }
    for (let i = 0; i < totalItems; i++) {
        document.querySelectorAll('.clients .nav .fa-circle')[i].addEventListener('click', () => {
            const widthItem = (document.querySelectorAll('.clientSlide')[0].offsetWidth) * i;
            document.querySelector('.renderClients').style.marginLeft = `-${widthItem}px`;

        });
    }
}


export { renderTestimonials };