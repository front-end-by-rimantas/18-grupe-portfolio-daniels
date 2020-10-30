function renderSingleClients(data) {

    return `<div class="clientSlide">
                <div class="alex">
                    <img class="alex" id='alex' src="${data.photo}" alt="Alex-photo">
                </div>
                <p>${data.text3}</p>
                <h3>${data.name1}</h3>
                <p>${data.name2}</p>
            </div>`;
}
// data-index="${middleIndex}
export default renderSingleClients;