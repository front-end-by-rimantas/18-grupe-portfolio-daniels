// Sukuria events header

import { scrollTo } from './scrollTo.js';

function scrollToSet(headerData) {

    for (let i = 0; i < headerData.length; i++) {

        document.querySelectorAll("nav p")[i].addEventListener('click', () => {
            scrollTo(headerData[i].menuTitle);
        });

    }
}

export { scrollToSet }