import { portfolio } from '../../data/worksdata.js';
import { isWorksDataValid } from './isWorksDataValid.test.js';
import {} from './IsWorksDataValid.test.js';

//kelintas tekstas is apteiktu duomenu
let whichTextPrinted = 0;
//uzraso teksta
function textPrint() {
    if (!isWorksDataValid(worksData[whichTextPrinted])) {
        return '';
    }
    let widthForText = worksData[whichTextPrinted].textPrinted.length;
    if (widthForText > 9) { widthForText = widthForText - widthForText / 10 + Math.round(widthForText / 10) * 0.3; }

    document.querySelector(".row.works .iam span").style.transition = "width 1.5s";
    document.querySelector(".row.works .iam .textplace").innerHTML = "&nbsp;" + portfolio[whichTextPrinted].textPrinted;
    document.querySelector(".row.works .iam span").style.width = `${widthForText*5.7}%`;

    whichTextPrinted++;
    if (whichTextPrinted >= portfolio.length) { whichTextPrinted = 0; }
    setTimeout(textDelete, 3500);
}

// istrina teksta
function textDelete() {
    document.querySelector(".row.works .iam span").style.transition = "width 0.7s";
    document.querySelector(".row.works .iam span").style.width = `0px`;

    setTimeout(textPrint, 700);
}

export { textPrint }