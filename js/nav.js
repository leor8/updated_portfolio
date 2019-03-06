$(document).ready(function() {

  // To prevent code from runing everytime theres a sizeChange
  let sizeChangedMobile = false;
  let sizeChangedDesktop = false;

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
    sizeChangedDesktop = true;
  } else {
    navMobile();
    sizeChangedMobile = true;
  }

  // Whenever the screen is being resized
  $(window).resize(function() {
    if($(window).width() > 780 && !sizeChangedDesktop) {
      navMouseEvents();
      sizeChangedDesktop = true;
      sizeChangedMobile = false;
    } else if (!sizeChangedMobile) {
      navMobile();
      sizeChangedDesktop = false;
      sizeChangedMobile = true;
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

function navMouseReset(className) {
  $("." + className + "_text").css('margin-top', '2rem');
  // $("." + className + "_text").css('padding-bottom', '0rem');
}

function navMouseEvents() {

  // Resetting mobile jquery events and css
  mobileMouseReset("about");
  mobileMouseReset("project");
  mobileMouseReset("contact");
  $(".about").unbind();
  $(".contact").unbind();
  $(".project").unbind();

  $(".about").bind("mouseenter", function(event) {
    navMouseEnter('about');
  });

  $(".about").bind("mouseleave", function(event) {
    navMouseExit('about');
  });

  $(".project").bind("mouseenter", function(event) {
    navMouseEnter('project');
  });

  $(".project").bind("mouseleave", function(event) {
    navMouseExit('project');
  });

  $(".contact").bind("mouseenter", function(event) {
    navMouseEnter('contact');
  });

  $(".contact").bind("mouseleave", function(event) {
    navMouseExit('contact');
  });

}

function navMobile() {

  navMouseReset('about');
  navMouseReset('project');
  navMouseReset('contact');
  $(".about").unbind();
  $(".project").unbind();
  $(".contact").unbind();

  $(".about").bind("mouseenter touchstart", function(event) {
    mobileMouseEnter('about');
  });

  $(".about").bind("mouseleave touchend", function(event) {
    mobileMouseExit('about');
  });

  $(".project").bind("mouseenter touchstart", function(event) {
    mobileMouseEnter('project');
  });

  $(".project").bind("mouseleave touchend", function(event) {
    mobileMouseExit('project');
  });

  $(".contact").bind("mouseenter touchstart", function(event) {
    mobileMouseEnter('contact');
  });

  $(".contact").bind("mouseleave touchend", function(event) {
    mobileMouseExit('contact');
  });


}








