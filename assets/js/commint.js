// add commint

const commintBtn = document.querySelector('.add-commint .custom-btn');
const lastCommints = document.querySelector('.last-commint');

commintBtn.addEventListener('click', (e) => {
  e.preventDefault();

  lastCommints.innerHTML += `
  
  <div class="commint-box">
  <div class="commint-img">
    <img 
      src="assets/images/user-1.png" 
      alt=""
      loading="lazy" />
  </div>

  <div class="commint-text">
    <h1 class="commint-name">
      ${document.querySelector('.add-commint .add-name').value}
    </h1>

    <p class="commint-date">
      ${new Date().toLocaleDateString()}
    </p>

    <p class="commint-desc">
      ${document.querySelector('.add-commint textarea').value}
    </p>
  </div>
</div>`;
} );