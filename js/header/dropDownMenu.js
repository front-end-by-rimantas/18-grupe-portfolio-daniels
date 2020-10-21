// ant mobile versijos menu atidarymas/uzdarymas

function dropDownMenu() {
    document.getElementsByClassName("menuChoices")[0].addEventListener("click", function() {
        const menuHeight = document.querySelector("nav").style.height;
        if (menuHeight === '0px') {
            document.querySelector("nav").style.height = `500px`;
        } else {
            document.querySelector("nav").style.height = `0px`;
        }
    });
}

export { dropDownMenu }