$(".article-wrapper").addClass("aniElement");
var $aniElement = $(".aniElement");
//$(".aniElement").css("opacity", "0");
//animaiton element variables

//window/document variables

function checkVisible () {
  var $scroll_top = $(window).scrollTop();
  var $window_height = $(window).height();
  var $window_bottom = ($scroll_top + $window_height);



    $.each($(".aniElement"), function() {
      var $element = $(this);
      var $aniElement_height = $element.outerHeight();
      var $aniElement_top = $element.offset().top;

    if ($aniElement_top <= $window_bottom) {
      console.log("ANIMATE ME!");
      console.log("aniElement_top");
      console.log("windowBottom:" + $window_bottom);
      console.log("elementTop:" +$aniElement_top);
      $element.addClass('animated slideInUp');
    }


    });
}

$(window).on('scroll resize', function () {
  checkVisible();
  console.log("scrollcheck");

});
$(window).trigger('scroll');
