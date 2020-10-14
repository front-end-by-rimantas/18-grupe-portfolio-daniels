


function renderSingleBlog(blog) {

    return `<div class="item">
                <img class="image" src=${blog.image}>
                <h6 class="tag">${blog.title}</h6>
                <h4 class="text">${blog.text}</h4>
                <span class="more">${blog.more}</span>
        </div>`;
}

export default renderSingleBlog;