const myNavbar = document.querySelector(".descriptionPlaceholder")
const navbarBtn = document.querySelector('.toggleDisplayImg')

navbarBtn.addEventListener('click', () => {
  myNavbar.classList.toggle("hidden");
})
