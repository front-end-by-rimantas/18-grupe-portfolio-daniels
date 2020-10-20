function renderSingleContact(data) {

    return `<div class="contact-row">
                <i class="${data.icon2}" aria-hidden="true"></i>
                <h2>${data.title2}</h2>
                <p>${data.text2}</p>
            </div>`;
}

export default renderSingleContact;