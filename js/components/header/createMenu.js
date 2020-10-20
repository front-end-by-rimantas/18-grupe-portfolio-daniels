import { isHeaderDateValid } from './isHeaderDataValid.js';
import {} from './isHeaderDataValid.test.js';

// sukuria meniu is datos
function createMenu(menuDate) {

    for (let i = 0; i < menuDate.length; i++) {
        if (!isHeaderDateValid(menuDate[i])) {
            return '';
        }
        let nameThisMenu = menuDate[i].menuTitle;
        document.querySelector("nav").innerHTML += `<p>${nameThisMenu}</p>`;
    }
    // uzkraunant Home pabraukiamas
    document.querySelectorAll("nav p")[0].style.borderBottom = "solid 2px #fff";
}

export { createMenu }