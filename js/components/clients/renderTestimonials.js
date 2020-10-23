
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