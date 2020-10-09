function renderSingleServices(data) {
 
    return `<div class="item">
                <i class="${data.icon}" aria-hidden="true"></i>
                <h2>${data.title}</h2>
                <p>${data.text}</p>
            </div>`;         
}

export default renderSingleServices;