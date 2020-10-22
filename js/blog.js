
function slidesGenerate() {
    let totalItems = document.querySelectorAll('.row.blog >.item').length;
    const widthItem = (document.querySelectorAll('.item')[0].offsetWidth + 50) * totalItems;
    document.querySelector('.rowBlog').style.width = `${widthItem}px`;
    totalItems -= 2;
    for (let i = 0; i < totalItems; i++) {
        document.querySelector('.blog .slides').innerHTML += `<i class="fa fa-circle active" aria-hidden="true"></i>`;

    }
    for (let i = 0; i < totalItems; i++) {
        document.querySelectorAll('.blog .fa-circle')[i].addEventListener('click', () => {
            const widthItem = (document.querySelectorAll('.item')[0].offsetWidth + 60) * i;
            document.querySelector('.blog .rowBlog').style.marginLeft = `-${widthItem}px`;

        });
    }
    let btns = document.querySelectorAll(".fa-circle");
    Array.from(btns).forEach(item => {
        item.addEventListener("click", () => {
            let selected = document.getElementsByClassName("active");
            selected[0].className = selected[0].className.replace("active", "");
            item.className += "active";
        });
    });
}
export { slidesGenerate }