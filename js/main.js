// To turn TESTS on go to js/isTestsOn.js

// header
import { headerData } from './data/headerData.js';
import { createMenu } from './components/header/createMenu.js';
createMenu(headerData);
import { menuScroll } from './components/header/menuScroll.js';
import { dropDownMenu } from './components/header/dropDownMenu.js';
dropDownMenu();
import { scrollToSet } from './components/header/scrollToSet.js';
import { menuOnResize } from './components/header/menuOnResize.js';
scrollToSet(headerData);


//home
import { textPrint } from './components/home/textPrint.js';
textPrint();

function include(file) {
    var script = document.createElement('script');
    script.src = file;
    script.type = 'text/javascript';
    script.defer = true;
    document.getElementsByTagName('head').item(0).appendChild(script);
}
include('./js/components/home/particles.min.js');


// clients
import numbersOnScroll from './components/clients/clients.js';

import renderClients from './components/clients/renderClients.js';
import { clientsData } from './data/clientsData.js';
renderClients(clientsData);
import { renderTestimonials } from './components/clients/renderTestimonials.js'
// import { renderTestimonials2 } from './components/clients/renderTestimonials.js'
renderTestimonials(clientsData);

// visos funkcijos kurios turi but paleidziamos is naujo, pakeiciant ekrano ploti
window.onresize = function () {
    //header
    menuOnResize();
}

// visos funkcijos kurios turi but paleidziamos kaskart scrollinant
window.onscroll = function () {
    //header
    menuScroll(headerData);
    numbersOnScroll();
}

// services - contacts 

import data from './data/services-contactsData.js';
import renderServices from './components/services/renderServices.js';
import renderContact from './components/contact/renderContact.js';
const { services, contactUs } = data;

renderServices(services);
renderContact(contactUs);
