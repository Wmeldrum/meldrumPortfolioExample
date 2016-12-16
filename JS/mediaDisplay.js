//console.log("mediaDisplay.js is connected");


var $mediaLink = $(".media-link");
var $mediaContainer = $(".media-container");
var $video = $("<iframe></iframe>",
{src:"https://www.youtube.com/embed/gHLtiVfYYDI"});

   $mediaLink.click(function(event) {
  event.preventDefault();
  if ($mediaLink.hasClass("active")) {
    $(this).removeClass("active");
    $video.remove();
    $mediaContainer.removeClass("iframe-video-container");

    $(".play-button").addClass("buttonSpinReverse");

    console.log("active class removed");
  }
  else {
  $(this).addClass("active");
//  $(".thumbnail-subtitle").css("color", somecolor );
  $(".play-button").removeClass("no-animation").addClass("animated buttonSpin");
  $(".media-container").append($video).addClass("iframe-video-container");
  console.log("media has been clicked!");
  }
});
