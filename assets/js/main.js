
const nav = document.querySelector('nav');
const stats = document.querySelector('.stats');
const statsContainer = document.querySelectorAll('.state-num');
let start = false; 

window.addEventListener('scroll', () => {
  if (window.scrollY > 30) {
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
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