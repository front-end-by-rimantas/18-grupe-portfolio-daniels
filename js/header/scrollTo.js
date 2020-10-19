// Paspaudus ant menu item, scrollina iki tam tikros vietos

let resizedTimes = 0;

function scrollTo() {
    let scrollMinus = 0;
    if (resizedTimes < 1) { scrollMinus = 120; } else {
        scrollMinus = 60;
    }
    const menuElementsCount = document.querySelector("header nav").childElementCount;
    for (let i = 0; i < menuElementsCount; i++) {
        let scrollHeight = document.querySelectorAll(".container")[i + 1].offsetTop;

        document.querySelectorAll("nav p")[i].addEventListener('click', () => {
            window.scrollTo(0, scrollHeight - scrollMinus);
        });
    }
    resizedTimes++;
}

export { scrollTo }