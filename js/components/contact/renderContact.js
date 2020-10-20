import renderSingleContact from '../contact/renderSingleContact.js';

function renderContact(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const contactUs = data[i];
        HTML += renderSingleContact(contactUs);
    }
    const servicesDOM = document.getElementsByClassName('renderedDiv')[0];
    servicesDOM.innerHTML += HTML;
}


export default renderContact;