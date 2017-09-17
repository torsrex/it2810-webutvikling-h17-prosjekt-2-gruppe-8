$(document).ready(() => {

  // Script to dynamically load webpages

  // This line removes the warning from the console.
  $.ajaxPrefilter( ( options, originalOptions, jqXHR ) => { options.async = true; })

  $("#mainContent").load('./main.html');
  $("#SingleNavigation li a").click(e => {
    $("#mainContent").empty();
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
