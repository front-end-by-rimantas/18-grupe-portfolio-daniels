import data from './data.js';
import renderServices from './renderServices.js';
import renderContact from './renderContact.js';
const { services, contactUs } = data;

renderServices(services);
renderContact(contactUs);

// header
import { menuDate } from './data/menuData.js';
import { createMenu } from './header/createMenu.js';
createMenu(menuDate);
import { menuScroll } from './header/menuScroll.js';
window.onscroll = () => menuScroll(menuDate);
import { dropDownMenu } from './header/dropDownMenu.js';
dropDownMenu();
import { scrollTo } from './header/scrollTo.js';
import { menuOnResize } from './header/menuOnResize.js';
scrollTo();

//home
import { textPrint } from './home/textPrint.js';
textPrint();

// visos funkcijos kurios turi but paleidziamos is naujo, pakeiciant ekrano ploti
window.onresize = function() {
    //header
    scrollTo();
    menuOnResize();
}