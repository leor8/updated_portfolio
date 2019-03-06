$(document).ready(function() {

  $(".mainNav").mouseenter(function(event) {
    $(".fa-stream").css('color', 'white');
    $(".navTitle").css('color', 'white');
  });

  $(".mainNav").mouseleave(function(event) {
    $(".fa-stream").css('color', 'black');
    $(".navTitle").css('color', 'black');
  });

  // When page first loads, check if its mobile or desktop
  if($(window).width() > 780) {
    navMouseEvents();
  } else {
    navMobile();
  }

  // Whenever the screen is being resized
  $(window).resize(function() {
    if($(window).width() > 780) {
      navMouseEvents();
    } else {
      navMobile();
    }
  });



});



let openNav = (event) => {
  $('.mainNav').css('z-index', '0');
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
  $('.mainNav').css('z-index', '99');
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

function mobileMouseEnter(className) {
  $("." + className + "_text").css('margin-top', '4rem');
  $("." + className + "_text").css('padding-bottom', '.6rem');
  $("." + className + "_text").css('border-bottom', '2px solid white');
}

function mobileMouseExit(className) {
  $("." + className + "_text").css('margin-top', '2rem');
  $("." + className + "_text").css('padding-bottom', '0rem');
  $("." + className + "_text").css('border-bottom', 'none');
}

function mobileMouseReset(className) {
  $("." + className + "_text").css('margin-top', '-0.1rem');
  // $("." + className + "_text").css('padding-bottom', '0rem');
}

function navMouseEvents() {
  $(".about").mouseenter(function(event) {
    navMouseEnter('about');

    // Making sure no mobile animation would be applied
    mobileMouseReset('about');
  });

  $(".project").mouseenter(function(event) {
    navMouseEnter('project');
    mobileMouseReset('project');
  });

  $(".contact").mouseenter(function(event) {
    navMouseEnter('contact');
    mobileMouseReset('contact');
  });

  $(".about").mouseleave(function(event) {
    navMouseExit('about');
    mobileMouseReset('about');
  });

  $(".project").mouseleave(function(event) {
    navMouseExit('project');
    mobileMouseReset('project');
  });

  $(".contact").mouseleave(function(event) {
    navMouseExit('contact')
    mobileMouseReset('contact');
  });
}

function navMobile() {

  // Prevent jquery mixup
  mobileMouseExit('about');
  mobileMouseExit('project');
  mobileMouseExit('contact');


  $(".about").mouseenter(function(event) {
    mobileMouseEnter('about');
  });

  // For mobile version
  $(".about").on('touchstart', function(event) {
    mobileMouseEnter('about');
  });

  $(".project").mouseenter(function(event) {
    mobileMouseEnter('project');
  });

  $(".project").on('touchstart', function(event) {
    mobileMouseEnter('project');
  });


  $(".contact").mouseenter(function(event) {
    mobileMouseEnter('contact');
  });

  $(".contact").on('touchstart', function(event) {
    mobileMouseEnter('contact');
  });


  $(".about").mouseleave(function(event) {
    mobileMouseExit('about')
  });

  // For mobile version
  $(".about").on('touchend', function(event) {
    mobileMouseExit('about');
  });

  $(".project").mouseleave(function(event) {
    mobileMouseExit('project')
  });

  $(".project").on('touchend', function(event) {
    mobileMouseExit('project');
  });

  $(".contact").mouseleave(function(event) {
    mobileMouseExit('contact')
  });

  $(".contact").on('touchend', function(event) {
    mobileMouseExit('contact');
  });
}








