$(document).ready(function() {
  $(".front_end").on('click', function() {
    $('.display_ground_hide_backend').removeClass('display_ground_backend');
    $('.display_ground_hide_android').removeClass('display_ground_android');
    $('.display_ground_hide_game').removeClass('display_ground_game');

    $('.display_ground_hide_frontend').toggleClass('display_ground_frontend');
  })

  $(".back_end").on('click', function() {
    $('.display_ground_hide_frontend').removeClass('display_ground_frontend');
    $('.display_ground_hide_android').removeClass('display_ground_android');
    $('.display_ground_hide_game').removeClass('display_ground_game');

    $('.display_ground_hide_backend').toggleClass('display_ground_backend');
  })

  $(".android").on('click', function() {
    $('.display_ground_hide_frontend').removeClass('display_ground_frontend');
    $('.display_ground_hide_backend').removeClass('display_ground_backend');
    $('.display_ground_hide_game').removeClass('display_ground_game');

    $('.display_ground_hide_android').toggleClass('display_ground_android');
  })

  $(".game").on('click', function() {
    $('.display_ground_hide_frontend').removeClass('display_ground_frontend');
    $('.display_ground_hide_backend').removeClass('display_ground_backend');
    $('.display_ground_hide_android').removeClass('display_ground_android');

    $('.display_ground_hide_game').toggleClass('display_ground_game');
  })



  $(".display_ground_btn").on('click', closeAllDisplayGround);
});

function closeAllDisplayGround() {
  $('.display_ground_hide_backend').removeClass('display_ground_backend');
  $('.display_ground_hide_frontend').removeClass('display_ground_frontend');
  $('.display_ground_hide_android').removeClass('display_ground_android');
  $('.display_ground_hide_game').removeClass('display_ground_game');
}