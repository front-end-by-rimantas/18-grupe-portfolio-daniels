// Paspaudus ant menu item, scrollina iki tam tikros vietos

function scrollTo(data) {
    if (data == undefined) { data = 'home'; }

    data = data.toLowerCase();
    const scrollHeight = document.querySelector(`.container .${data}`).offsetTop;
    window.scrollTo(0, scrollHeight - 60);
}

export { scrollTo }