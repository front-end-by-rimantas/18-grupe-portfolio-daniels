// ant mobile versijos menu atidarymas/uzdarymas
function dropDownMenu() {

    let dropdowns = 0;
    document.getElementsByClassName("menuChoices")[0].addEventListener("click", function() {
        if (dropdowns < 1) {
            dropdowns++;
            document.querySelector("nav").style.transition = `0.5s`;
            document.querySelector("nav").style.height = `500px`;
        } else {
            dropdowns = 0;
            document.querySelector("nav").style.transition = `0.5s`;
            document.querySelector("nav").style.height = `0px`;
        }
    });
}

export { dropDownMenu }