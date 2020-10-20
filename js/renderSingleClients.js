function renderSingleClients(data) {

    return `<div class="clientSlide one>
                <img class="alex" src="${data.photo}" alt="Alex-photo">
                <p>${data.text3}</p>
                <h3>${data.name1}</h3>
                <p>${data.name2}</p>
            </div>`;
}
// data-index="${middleIndex}
export default renderSingleClients;