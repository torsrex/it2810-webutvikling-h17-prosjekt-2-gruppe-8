$(document).ready(() => {

  //Fix xmlhttprequest deprecated warning
  $.ajaxPrefilter((options, original_Options, jqXHR)  => options.async = true)

  $("#mainContent").load("./subpages/main.html");
  $("#SingleNavigation li a").on("click", e => {
    e.preventDefault();
    const subPage = e.target.getAttribute("href")
    $("#mainContent").load(`subpages/${subPage}.html`, () => {
      console.log("yo");
      switch (subPage) {
        case "docs":
          $.getScript("js/prism.js");
          break;
        case "media":
          $.getScript("js/media.js");
          break;
        default:
          return;
      }
    })
  })

    // Toggle the hero img
    const myNavbar = $(".descriptionPlaceholder");
    const navbarBtn = $(".toggleDisplayImg");
    const docsBtn = $(".docs-btn");

    navbarBtn.on("click", () => {
        myNavbar.toggleClass("hidden");
    })
    $(window).on("resize", () => {
      if($(window).width() < 768) {
        const hamburger = $("#hamburger");
        const navigation = $(".navigation");
        hamburger.on("click", () => {
          hamburger.toggleClass("active");
          navigation.toggleClass("hidden");
        })
      }
    })

});
