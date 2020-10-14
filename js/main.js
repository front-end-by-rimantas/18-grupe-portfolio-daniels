import data from './data.js';
import renderServices from './renderServices.js';
import renderContact from './renderContact.js';
const { services, contactUs } = data;

renderServices(services);
renderContact(contactUs);



import blogData from './data/blog.js';
import renderBlog from './renderBlog.js';

renderBlog(blogData);
