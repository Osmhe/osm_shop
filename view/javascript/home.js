window.addEventListener("scroll", () => {
  let heade = document.getElementById("navbar");
  heade.classList.toggle("sticky",window.scrollY > 0);
})

let search_ic = document.getElementById('search_ic');
let times_ic = document.getElementById('times');
let search = document.querySelector('.search');


search_ic.addEventListener('click', () => {
    search.classList.add('show');
  })

times_ic.onclick = () => {
  search.classList.add('hide');
  
}

// brand sliders
const swiperEl = document.getElementById('mySwiper')
Object.assign(swiperEl, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
swiperEl.initialize();
