
// Initializing variables and list of images
var slideshowimages = ["images/slideshow_images/beans.jpg", "images/slideshow_images/types.jpg", "images/slideshow_images/2017.jpg", 
                       "images/slideshow_images/stripa.jpg"];
var i = 0;
var diff = 25;
var timer = null;

// Updates src image in media.html every fifth second from the list of images
function slideShow() { 
    document.getElementById("slide").src = slideshowimages[i];
    document.getElementById("slide_name").innerHTML = slideshowimages[i].split("/")[2].split(".")[0];

    // Current image indicators under image created by canvas
    // Creates n number of indicators based on the number of images, the selected one is filled
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    var x = 87;
    for(var j = 0; j < slideshowimages.length; j++) {
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

        x = x + diff;
    }

    // Makes sure the next image is displayed, or the first one if at the end
    if(i < slideshowimages.length - 1) {
        i++;
    }
    else{
        i = 0; 
    }

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

window.onload = slideShow;