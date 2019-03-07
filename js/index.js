$(document).ready(function() {

  $('.image_link_container').mouseenter(function(event) {
    /* Act on the event */
    imageAsLink();
  });

  $('.image_link_container').on('touchstart', function(event) {
    /* Act on the event */
    imageAsLink();
  });

  $('.image_link_container').mouseleave(function(event) {
    /* Act on the event */
    imageAsLinkExit();
  });

  $('.image_link_container').on('touchend', function(event) {
    /* Act on the event */
    imageAsLinkExit();
  });


});

function imageAsLink() {
  $('.image_link').css('filter', 'saturate(8) blur(5px)');
  $('.hover_image_text').addClass('hover_image_text_show');
  $('.hover_image_text').css('display', 'inline');
}

function imageAsLinkExit() {
  $('.image_link').css('filter', 'none');
  $('.hover_image_text').removeClass('hover_image_text_show');
  $('.hover_image_text').css('display', 'none');
}