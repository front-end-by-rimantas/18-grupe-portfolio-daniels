import renderSingleBlog from './renderSingleBlog.js'

function renderBlog(blogData) {
    let HTML = '';
    for (let i = 0; i < blogData.length; i++) {
        const blog = blogData[i];
        HTML += renderSingleBlog(blog);
    }
    const blogDOM = document.getElementsByClassName('rowBlog')[0];
    blogDOM.innerHTML += HTML;
}

export default renderBlog;