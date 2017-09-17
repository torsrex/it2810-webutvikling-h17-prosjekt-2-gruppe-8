$(document).ready(() => {

    //Fix xmlhttprequest deprecated warning
    $.ajaxPrefilter(function (options, original_Options, jqXHR) {
        options.async = true;
    });

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
    const myNavbar = $(".descriptionPlaceholder");
    const navbarBtn = $('.toggleDisplayImg');

    navbarBtn.on('click', () => {
        myNavbar.toggleClass("hidden");
    })

});
