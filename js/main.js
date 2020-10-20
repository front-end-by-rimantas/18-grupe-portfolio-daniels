// header
import { headerData } from './data/headerData.js';
import { createMenu } from './header/createMenu.js';
createMenu(headerData);
import { menuScroll } from './header/menuScroll.js';
import { dropDownMenu } from './header/dropDownMenu.js';
dropDownMenu();
import { scrollTo } from './header/scrollTo.js';
import { menuOnResize } from './header/menuOnResize.js';
scrollTo();

//home
import { textPrint } from './home/textPrint.js';
textPrint();

function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('head').item(0).appendChild(script);
}
include('./js/home/particles.min.js');

// visos funkcijos kurios turi but paleidziamos is naujo, pakeiciant ekrano ploti
window.onresize = function() {
    //header
    scrollTo();
    menuOnResize();
}

// visos funkcijos kurios turi but paleidziamos kaskart scrollinant
window.onscroll = function() {
    //header
    menuScroll(headerData);
}

// services - contacts 

import data from './data/services-contactsData.js';
import renderServices from './components/services/renderServices.js';
import renderContact from './components/contact/renderContact.js';
const { services, contactUs } = data;

renderServices(services);
renderContact(contactUs);


//tests data
// import {} from './isHeaderDataValid.test.js'; (js/header/createMenu.js)