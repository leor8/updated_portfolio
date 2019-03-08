$(document).ready(function() {

  homeOpenAnimation();

  let frontendClicked = false, backendClicked = false, mobileClicked = false, gameClicked = false;


  $(".frontend").on('click', function() {
    if(!frontendClicked) {
      $('.display_ground_hide_backend').removeClass('display_ground_backend');
      $('.display_ground_hide_android').removeClass('display_ground_android');
      $('.display_ground_hide_game').removeClass('display_ground_game');
      $('.display_ground_hide_about').removeClass('display_ground_about');

      $('.display_ground_hide_frontend').toggleClass('display_ground_frontend');
      $('.frontend').css('border', '4px dotted black');
      $('.backend').css('border', 'none');
      $('.mobile').css('border', 'none');
      $('.game').css('border', 'none');

      frontendClicked = true;
      backendClicked = false;
      mobileClicked = false;
      gameClicked = false;
    } else {
      frontendClicked = false;
      $('.display_ground_hide_frontend').toggleClass('display_ground_frontend');
      $('.display_ground_hide_about').addClass('display_ground_about');
      $('.frontend').css('border', 'none');
    }

  })

  $(".backend").on('click', function() {
    if(!backendClicked) {
      $('.display_ground_hide_frontend').removeClass('display_ground_frontend');
      $('.display_ground_hide_android').removeClass('display_ground_android');
      $('.display_ground_hide_game').removeClass('display_ground_game');
      $('.display_ground_hide_about').removeClass('display_ground_about');

      $('.display_ground_hide_backend').toggleClass('display_ground_backend');

      $('.backend').css('border', '4px dotted black');
      $('.frontend').css('border', 'none');
      $('.mobile').css('border', 'none');
      $('.game').css('border', 'none');

      backendClicked = true;
      frontendClicked = false;
      mobileClicked = false
      gameClicked = false
    } else {
      backendClicked = false;
      $('.display_ground_hide_backend').toggleClass('display_ground_backend');
      $('.display_ground_hide_about').addClass('display_ground_about');
      $('.backend').css('border', 'none');
    }
  })

  $(".mobile").on('click', function() {
    if(!mobileClicked) {
      $('.display_ground_hide_frontend').removeClass('display_ground_frontend');
      $('.display_ground_hide_backend').removeClass('display_ground_backend');
      $('.display_ground_hide_game').removeClass('display_ground_game');
      $('.display_ground_hide_about').removeClass('display_ground_about');

      $('.display_ground_hide_android').toggleClass('display_ground_android');

      $('.mobile').css('border', '4px dotted black');
      $('.frontend').css('border', 'none');
      $('.backend').css('border', 'none');
      $('.game').css('border', 'none');

      mobileClicked = true;
      frontendClicked = false;
      backendClicked = false
      gameClicked = false;
    } else {
      mobileClicked = false;
      $('.display_ground_hide_android').toggleClass('display_ground_android');
      $('.display_ground_hide_about').addClass('display_ground_about');
      $('.mobile').css('border', 'none');
    }
  })

  $(".game").on('click', function() {
    if(!gameClicked) {
      $('.display_ground_hide_frontend').removeClass('display_ground_frontend');
      $('.display_ground_hide_backend').removeClass('display_ground_backend');
      $('.display_ground_hide_android').removeClass('display_ground_android');
      $('.display_ground_hide_about').removeClass('display_ground_about');

      $('.display_ground_hide_game').toggleClass('display_ground_game');

      $('.mobile').css('border', 'none');
      $('.frontend').css('border', 'none');
      $('.backend').css('border', 'none');
      $('.game').css('border', '4px dotted black');

      mobileClicked = false;
      frontendClicked = false;
      backendClicked = false
      gameClicked = true;
    } else {
      gameClicked = false;
      $('.display_ground_hide_game').toggleClass('display_ground_game');
      $('.display_ground_hide_about').addClass('display_ground_about');
      $('.game').css('border', 'none');
    }
  });

  $('.display_ground_btn').on('click', function() {
    closeAllDisplayGround();
  })
});


// Helper functions
function homeOpenAnimation() {
  // Check if page is within about section so that animations would be applied
  if($(document).scrollTop() < $('#project').offset().top - 400) {
    $(".display_ground_about").css('transform', 'scale(8)');
  } else {
    $(".display_ground_about").css('transform', 'scale(1)');
  }

  setTimeout(function() {
    $(".display_ground_about").css('transition', 'transform .75s');
    $(".display_ground_about").css('transform', 'scale(1)');
  }, 100);
}

function closeAllDisplayGround() {
  $('.display_ground_hide_backend').removeClass('display_ground_backend');
  $('.display_ground_hide_frontend').removeClass('display_ground_frontend');
  $('.display_ground_hide_android').removeClass('display_ground_android');
  $('.display_ground_hide_game').removeClass('display_ground_game');
  $('.display_ground_hide_about').addClass('display_ground_about');

  $('.backend').css('border', 'none');
  $('.frontend').css('border', 'none');
  $('.mobile').css('border', 'none');
  $('.game').css('border', 'none');

  frontendClicked = false;
  backendClicked = false;
  mobileClicked = false;
  gameClicked = false;
}









