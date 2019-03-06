$(document).ready(function() {

  $(".mainNav").mouseenter(function(event) {
    $(".fa-stream").css('color', 'white');
    $(".navTitle").css('color', 'white');
  });

  $(".mainNav").mouseleave(function(event) {
    $(".fa-stream").css('color', 'black');
    $(".navTitle").css('color', 'black');
  });

  $(".about").mouseenter(function(event) {
    navMouseEnter('about');
  });

  $(".project").mouseenter(function(event) {
    navMouseEnter('project');
  });

  $(".about").mouseleave(function(event) {
    navMouseExit('about')
  });

  $(".project").mouseleave(function(event) {
    navMouseExit('project')
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

  // This line prevents if the height of the brower changes and the two bottom divs will move and show white spaces.
  // The settimeout function prevents the callback being ran too early that blocks all the animation
  setTimeout(function() {
    $('.overlayDiv').addClass('overlayDivDisplay');
    $('.overlayForeground').removeClass('overlayForeground').addClass('overlayForegroundDisplay');
    $('.fading').css('height', '0');
    $('.fading_reverse').css('height', '0');
  }, 500);

  // Disable scrolling code from https://stackoverflow.com/questions/3656592/how-to-programmatically-disable-page-scrolling-with-jquery
  $('html, body').css({
    overflow: 'hidden',
    height: '100%'
  });

}

let closeNav = (event) => {
  $('.overlayDivLeftTop').removeClass('overlayNavLeftTop');
  $('.overlayDivRightTop').removeClass('overlayNavRightTop');
  $('.overlayDivRightBottom').removeClass('overlayNavRightBottom');
  $('.overlayDivLeftBottom').removeClass('overlayNavLeftBottom');

  $('.overlayDiv').removeClass('overlayDivDisplay');
  $('.fading').css('height', '100%');
  // $('.fading_reverse').css('transform', 'translateY(-100vh)');
  $('.fading_reverse').css('height', '100%');

  $('.overlayForegroundDisplay').removeClass('overlayForegroundDisplay').addClass('overlayForeground');

  // Enable scrolling code from https://stackoverflow.com/questions/3656592/how-to-programmatically-disable-page-scrolling-with-jquery
  $('html, body').css({
    overflow: 'auto',
    height: 'auto'
  });
}

// helper functions
function navMouseEnter(className) {
  $(".hover_bk.hover_" + className).addClass('hover_bk_show');
  $("." + className + "_text").css('bottom', '-27rem');
  $("." + className + "_text").css('padding-bottom', '1rem');
  $("." + className + "_text").css('border-bottom', '2px solid white');
}

function navMouseExit(className) {
  $(".hover_bk.hover_" + className).removeClass('hover_bk_show');
  $("." + className + "_text").css('bottom', '-30rem');
  $("." + className + "_text").css('padding-bottom', '0rem');
  $("." + className + "_text").css('border-bottom', 'none');
}






