$(document).ready(() => {

  //Fix xmlhttprequest deprecated warning
  $.ajaxPrefilter((options, original_Options, jqXHR)  => options.async = true)

  $("#mainContent").load('./main.html');
  $("#SingleNavigation li a").click(e => {
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
    $(window).on("resize", () => {
      if($(window).width() < 768) {
        const hamburger = $("#hamburger")
        const navigation = $(".navigation")
        hamburger.on('click', () => {
          hamburger.toggleClass("active");
          navigation.toggleClass("hidden");
        })
      }
    })

});
