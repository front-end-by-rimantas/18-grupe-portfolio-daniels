import renderSingleServices from './renderSingleServices.js';

function renderServices(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const services = data[i];
        HTML += renderSingleServices(services);
    }
    const servicesDOM = document.getElementsByClassName('renderedServices')[0];
    servicesDOM.innerHTML += HTML;
}


export default renderServices;