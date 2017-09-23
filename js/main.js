$(document).ready(() => {


  const hamburger = $("#hamburger");
  const navigation = $("nav ul");
  const toggleHeroBtn = $(".toggle-hero-btn");
  const heroImg = $(".hero-img");
  const main = $("main")

  //Fix xmlhttprequest deprecated warning
  $.ajaxPrefilter((options, original_Options, jqXHR)  => options.async = true)

  main.load("./subpages/main.html");
  $("nav").find("li a").on("click", e => {
    e.preventDefault();
    Array.from($("nav li a")).forEach(listElement => {
      console.log(listElement);
      if (listElement === e.target) {
        listElement.classList.add('active-list-element')
      } else {
        listElement.classList.remove('active-list-element')
      }
    })
    const subPage = e.target.getAttribute("href")
    main.load(`subpages/${subPage}.html`, () => {
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


    toggleHeroBtn.on("click", () => {
        heroImg.toggleClass("hidden");
    })


    const toggleMenu = () => {
      if($(window).width() < 768) {
        hamburger.on("click", () => {
          hamburger.toggleClass("active");
          navigation.toggleClass("hidden");
        })
      }
    }

    $(window).on("resize", () => {
      toggleMenu()
    })
    toggleMenu()

    $( window ).on( "orientationchange", e => {
      if (screen.orientation.angle !== 0) {
        navigation.removeClass("hidden")
      }
      else {
        hamburger.addClass("active")
      }
    })

});
