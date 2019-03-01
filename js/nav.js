$(document).ready(function() {

  $(".mainNav").mouseenter(function(event) {
    $(".fa-stream").css('color', 'white');
    $(".navTitle").css('color', 'white');
  });

  $(".mainNav").mouseleave(function(event) {
    $(".fa-stream").css('color', 'black');
    $(".navTitle").css('color', 'black');
  });

});

// function openNav(event) {
//   $('.overlayDiv').toggleClass('overlayNav');
// }

let openNav = (event) => {
  $('.overlayDivLeftTop').addClass('overlayNavLeftTop');
  $('.overlayDivRightTop').addClass('overlayNavRightTop');
  $('.overlayDivRightBottom').addClass('overlayNavRightBottom');
  $('.overlayDivLeftBottom').addClass('overlayNavLeftBottom');

  $('.overlayForeground').removeClass('overlayForeground').addClass('overlayForegroundDisplay');
}

let closeNav = (event) => {
  $('.overlayDivLeftTop').removeClass('overlayNavLeftTop');
  $('.overlayDivRightTop').removeClass('overlayNavRightTop');
  $('.overlayDivRightBottom').removeClass('overlayNavRightBottom');
  $('.overlayDivLeftBottom').removeClass('overlayNavLeftBottom');

  $('.overlayForegroundDisplay').removeClass('overlayForegroundDisplay').addClass('overlayForeground');
}