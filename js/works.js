import portfolio from './data/worksdata.js';


const filterbuttons=document.querySelectorAll('.filter-buttons span');


  filterbuttons.forEach(btn => {
    btn.addEventListener('click', function() {
    document.querySelector('.active').classList.remove("active")
    btn.classList.toggle("active");

  const category = btn.dataset.category
  galleryImages(category)
      
  } )
  })
  
function galleryImages(filter) {
  let HTML = "";
  const gallery = document.querySelector(".gallery");
  gallery.innerHTML = HTML;


  portfolio.forEach(image => {
   if (image.category.includes(filter)){
    HTML = `
    <div class="item" data-src="${image.img}">
        <img src="${image.img}" alt="images" data-category="${image.category}" class="galerija">
            <div class="overlay">
                <div>
                <span class="gallery-title"> ${image.title} <span>
                <div class="gallery-icons">
                <i class="chain fa fa-chain-broken" aria-hidden="true" ></i>
                <i class="zoom-in fa fa-search-plus" ></i>
                </div>
                </div>
            </div>
    </div>`;
    gallery.innerHTML += HTML;
   }
  })
  lightboxImg()
}
galleryImages("all");


function lightboxImg () {
  const lightbox = document.createElement('div')
  lightbox.className = 'lightbox'
  document.body.appendChild(lightbox)
  const images = document.querySelectorAll('.gallery .item');

  images.forEach(item => {
    item.querySelector('.zoom-in').addEventListener('click', e => {
      lightbox.classList.add('active');
      const img = document.createElement('img');
      img.src = item.dataset.src
      while (lightbox.firstChild) {
        lightbox.removeChild(lightbox.firstChild)
      }
      lightbox.appendChild(img)
    });
  });
  lightbox.addEventListener('click', e => {
    if (e.target !== e.currentTarget) return
    lightbox.classList.remove('active')
  })
}
