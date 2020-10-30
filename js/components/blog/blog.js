
function slidesGenerate() {
    let totalItems = document.querySelectorAll('.rowBlog >.blog-items').length;
    const widthItem = (document.querySelectorAll('.blog-items')[0].offsetWidth + 50) * totalItems;
    document.querySelector('.rowBlog').style.width = `${widthItem}px`;
    totalItems -= 2;
    for (let i = 0; i < totalItems; i++) {
        let dotActive = "";
        if (i === 0) { dotActive = "active"; }
        document.querySelector('.blog .slides').innerHTML += `<i class="fa fa-circle ${dotActive}" aria-hidden="true"></i>`;

    }
    for (let i = 0; i < totalItems; i++) {
        document.querySelectorAll('.blog .fa-circle')[i].addEventListener('click', () => {
            const widthItem = (document.querySelectorAll('.blog-items')[0].offsetWidth + 60) * i;
            document.querySelector('.blog .rowBlog').style.marginLeft = `-${widthItem}px`;
            for (let z = 0; z < totalItems; z++) {
                document.querySelectorAll('.blog .fa-circle')[z].classList.remove("active");
            }
            document.querySelectorAll('.blog .fa-circle')[i].classList.add("active");

        });

    }
}
export { slidesGenerate }