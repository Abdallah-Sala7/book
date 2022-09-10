const barsMenu = document.querySelector('.bars-menu');
const menu = document.querySelector('.mobile-menu');

barsMenu.addEventListener('click', (e) => {
  e.preventDefault();
  e.stopPropagation();
  barsMenu.classList.toggle('open');
  menu.classList.toggle('active');
});

window.addEventListener('click',() => {
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    barsMenu.classList.remove('open');
  }
});

menu.addEventListener('click', (e) => {
  e.stopPropagation();
});



const nav = document.querySelector('nav');
const stats = document.querySelector('.stats');
const statsContainer = document.querySelectorAll('.state-num');
let start = false; 

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    nav.classList.add('active');
    // document.querySelector('body').classList.add('active');
  } else {
    nav.classList.remove('active');
    // document.querySelector('body').classList.remove('active');
  }

  if (window.scrollY >= stats.offsetTop - window.innerHeight / 2) {
    if (!start) {
      statsContainer.forEach(el => {
        let endNum = parseInt(el.dataset.target);
        let num = 0;
        
        let numInterval = setInterval(() => {
          num++;
          el.innerHTML = num;
          if (num === endNum) {
            clearInterval(numInterval);
          }
        } ,2000 / endNum);
      } );
    }
    start = true;
  }
} );

const testimonials = document.querySelector('.testimonials-contint');
const testimonialNextBtn = document.querySelector('.scroll-btn-next');
const testimonialPrevBtn = document.querySelector('.scroll-btn-prev');

testimonialNextBtn.addEventListener('click', (e) => {
  e.preventDefault();
  testimonials.scrollBy(10, -testimonials.offsetWidth);

  console.log(testimonials.scrollLeft);
} );

testimonialPrevBtn.addEventListener('click', (e) => {
  e.preventDefault();
  testimonials.scrollBy(-10, -testimonials.offsetWidth);

  console.log(testimonials.scrollLeft);

} );