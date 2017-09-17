// Toggle the hero img
const myNavbar = $(".descriptionPlaceholder");
const navbarBtn = $('.toggleDisplayImg');

navbarBtn.on('click', () => {
    myNavbar.toggleClass("hidden");
})
