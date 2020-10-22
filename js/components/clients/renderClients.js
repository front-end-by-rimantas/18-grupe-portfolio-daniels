import renderSingleClients from './renderSingleClients.js';

function renderClients(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const clientSlide = data[i];
        HTML += renderSingleClients(clientSlide);
    }
    const clientsDOM = document.getElementsByClassName('renderClients')[0];
    clientsDOM.innerHTML += HTML;
}



export default renderClients;