import data from './data.js';
import renderServices from './renderServices.js';
import renderContact from './renderContact.js';
import renderClients from './renderClients.js';
import renderTestimonials from './renderTestimonials.js';

const { services, contactUs, clientSlide } = data;

renderServices(services);
renderContact(contactUs);
renderClients(clientSlide);

// Clients import
import numbersOnScroll from './clients.js';
// // Clients function
window.addEventListener('scroll', numbersOnScroll);




renderTestimonials('#clients_block', clientSlide);