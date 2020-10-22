
function slidesGenerate() {
    let totalItems = document.querySelectorAll('.row.blog >.item').length;
    const widthItem = (document.querySelectorAll('.item')[0].offsetWidth + 60) * totalItems;
    document.querySelector('.rowBlog').style.width = `${widthItem}px`;
    totalItems -= 2;
    for (let i = 0; i < totalItems; i++) {
        document.querySelector('.blog .slides').innerHTML += `<i class="fa fa-circle" aria-hidden="true"></i>`;

    }
    for (let i = 0; i < totalItems; i++) {
        document.querySelectorAll('.blog .fa-circle')[i].addEventListener('click', () => {
            const widthItem = (document.querySelectorAll('.item')[0].offsetWidth + 50) * i;
            document.querySelector('.blog .rowBlog').style.marginLeft = `-${widthItem}px`;

        });
    }
}


export { slidesGenerate }