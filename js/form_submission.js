$(document).ready(function() {
  $('.contact_submit').on("click", function(event) {
    // Prevent page from going up
    event.preventDefault();
    console.log(emailValidation($('#inquery_email').val()));
    //  Form validation
    if($('#inquery_name').val() != "" && $('#inquery_email').val() != "") {

      if(emailValidation($('#inquery_email').val())){
        $('.contact_form').fadeOut(500, function() {
          $('.contact_form').empty();

          let $messageReceived = "<p>Thank you for your message. I will get back to you as soon as possible!</p>";

          // Fade in code modified from https://stackoverflow.com/questions/978708/jquery-append-fadein
          $('.messageReceived').append($messageReceived).hide().fadeIn(500);

        });
      } else {
        alert("Please enter a valid email address.");
      }

    } else if ($('#inquery_name').val() == "") {
      // alert("Please enter your name.");
    } else if ($('#inquery_email').val() == "") {
      // alert("Please enter your email address.");
    }

  });

});

function emailValidation(emailAddress) {
  // Regex retrieved from http://emailregex.com/
  let regexQuery = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexQuery.test(emailAddress);
}