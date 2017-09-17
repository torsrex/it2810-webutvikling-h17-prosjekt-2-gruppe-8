$(document).ready(function() {

  // Script to dynamically load webpages

  $("#mainContent").load('./main.html');
  $("#SingleNavigation").find("li a").click(e => {

    e.preventDefault();
    const subPage = e.target.getAttribute("href")
    $("#mainContent").load(`${subPage}.html`);
    // Change URL on subpage click.
    // subPage !== "index" && history.pushState(null, null, `${subPage}`)
  })

  // Toggle the hero img
  const myNavbar = $(".descriptionPlaceholder")
  const navbarBtn = $('.toggleDisplayImg')

  navbarBtn.on('click', () => {
    myNavbar.toggleClass("hidden");
  })


});
