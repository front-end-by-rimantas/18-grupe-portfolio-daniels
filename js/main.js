import data from './data.js';
import renderServices from './renderServices.js';
import renderContact from './renderContact.js';
import numbersOnScroll from './clients.js';
const { services, contactUs } = data;

renderServices(services);
renderContact(contactUs);
// window.onscroll = numbersOnScroll();
// clientNumbers.forEach = updateCount();