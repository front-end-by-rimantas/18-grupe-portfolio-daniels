import data from './data.js';
import renderServices from './renderServices.js';
import renderContact from './renderContact.js';

const { services, contactUs } = data;

renderServices(services);
renderContact(contactUs);

// Clients import
import numbersOnScroll from './clients.js';
// // Clients function
window.onscroll = numbersOnScroll();