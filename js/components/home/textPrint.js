import { homeData } from '../../data/homeData.js';
import { isHomeDataValid } from './isHomeDataValid.js';
import {} from './isHomeDataValid.test.js';

//kelintas tekstas is apteiktu duomenu
let whichTextPrinted = 0;
//uzraso teksta
function textPrint() {
    if (!isHomeDataValid(homeData[whichTextPrinted])) {
        return '';
    }
    let widthForText = homeData[whichTextPrinted].textPrinted.length;
    if (widthForText > 9) { widthForText = widthForText - widthForText / 10 + Math.round(widthForText / 10) * 0.3; }

    document.querySelector(".row.home .iam span").style.transition = "width 1.5s";
    document.querySelector(".row.home .iam .textplace").innerHTML = "&nbsp;" + homeData[whichTextPrinted].textPrinted;
    document.querySelector(".row.home .iam span").style.width = `${widthForText*5.7}%`;

    whichTextPrinted++;
    if (whichTextPrinted >= homeData.length) { whichTextPrinted = 0; }
    setTimeout(textDelete, 3500);
}

// istrina teksta
function textDelete() {
    document.querySelector(".row.home .iam span").style.transition = "width 0.7s";
    document.querySelector(".row.home .iam span").style.width = `0px`;

    setTimeout(textPrint, 700);
}

export { textPrint }