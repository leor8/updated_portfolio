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

  smoothScroll();
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

// The code for function below is from https://css-tricks.com/snippets/jquery/smooth-scrolling/ for smooth same page scrolling effects
function smoothScroll() {
  // Select all links with hashes
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: (target.offset().top - 190)
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
}
