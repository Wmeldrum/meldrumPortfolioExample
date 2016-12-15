//console.log("mediaDisplay.js is connected");


var $mediaLink = $(".media-link");
var $mediaContainer = $(".mediaContainer");
var $video = $("<iframe></iframe>",
{align: "bottom",src:"https://www.youtube.com/embed/gHLtiVfYYDI"});

   $mediaLink.click(function(event) {
  event.preventDefault();
  if ($mediaLink.hasClass("active")) {
    $(this).removeClass("active");
    console.log("active class removed");
  }
  else {
  $(this).addClass("active");
  $(".media-container").append($video).addClass("iframe-video-container");
  console.log("media has been clicked!");
  }
});

if ($mediaLink.hasClass("active")) {
  console.log("media is active");

}
else {
  /*if has active class
  reverse buttonSpin
  remove active class
  slideup media and pop out of dom

  */
}
