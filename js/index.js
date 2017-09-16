$(document).ready(function() {

  $("#mainContent").load('./main.html');
  $("#SingleNavigation li a").click(e => {
    $("#mainContent").empty();
    e.preventDefault();
    const subPage = e.target.getAttribute("href")
    $("#mainContent").load(`${subPage}.html`);
    // Change URL on subpage click.
    // subPage !== "index" && history.pushState(null, null, `${subPage}`)
  })

  const myNavbar = $(".descriptionPlaceholder")
  const navbarBtn = $('.toggleDisplayImg')

  navbarBtn.on('click', () => {
    myNavbar.toggleClass("hidden");
  })


});
