// Paspaudus ant menu item, scrollina iki tam tikros vietos

function scrollTo() {
    const menuElementsCount = document.querySelector("header nav").childElementCount;
    for (let i = 0; i < menuElementsCount; i++) {
        let scrollHeight = document.querySelectorAll(".container")[i + 1].offsetTop;

        document.querySelectorAll("nav p")[i].addEventListener('click', () => {
            window.scrollTo(0, scrollHeight - 120);
        });
    }
}

export { scrollTo }