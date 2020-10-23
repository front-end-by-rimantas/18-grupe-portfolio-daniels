function renderSingleBlog(blog) {

        return `<div class="blog-items">
                <img class="img" src=${blog.image}>
                <div class="content">
                <h6 class="tag"><a href="#">${blog.title}</a></h6>
                <h4><a href="#">${blog.text}</a></h4>
                <span class="more"><a href="#">${blog.more}</a></span>
                </div>
        </div>`

}

export default renderSingleBlog; 