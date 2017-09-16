if (typeof BASE === 'undefined') {
  // Initializing variables and list of images
  const BASE = "images/slideshow_images"
  const slideshowimages = ["beans", "types", "2017", "stripa"];
  let i = 0;
  let diff = 25;
  let timer = null;

  // Updates src image in media.html every fifth second from the list of images
  function slideShow() {
    if (!document.getElementById("slide")) {
      return
    }
    document.getElementById("slide").src = `${BASE}/${slideshowimages[i]}.jpg`;
    document.getElementById("slide_name").innerHTML = slideshowimages[i];

    // Current image indicators under image created by canvas
    // Creates n number of indicators based on the number of images, the selected one is filled
    const canvas = document.getElementById("canvas");
    const context = canvas.getContext("2d");
    const {width, height} = canvas
    context.clearRect(0, 0, width, height);

    let x = 87;
    for(let j = 0; j < slideshowimages.length; j++) {
      if(j == i) {
        context.beginPath();
        context.arc(x + diff, 10, 4, 0, 2 * Math.PI);
        context.stroke();
        context.strokeStyle = "#414242";
        context.fillStyle = "#414242";
        context.fill();
      } else {
        context.beginPath();
        context.arc(x + diff, 10, 4, 0, 2 * Math.PI);
        context.stroke();
        context.strokeStyle = "#414242";
      }

      x += diff;
    }

    // Makes sure the next image is displayed, or the first one if at the end
    i < slideshowimages.length - 1 ? i++ : i = 0
    timer = setTimeout("slideShow()",5000);
  }

  // Is called if the image is clicked, will ship to the next image and reset the timer
  function forceNext() {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    slideShow();
  }

  slideShow()
}
