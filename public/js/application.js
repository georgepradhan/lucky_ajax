$(document).ready(function () {

  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery
  $('form').on('submit', function(event){
    event.preventDefault();
    // generate random number via JS
    var roll = Math.floor(Math.random()*6 + 1); // this is optional (but now we can delete the server side logic for generating a random number in the Roll model)

    $.post(this.action, // url
           {value: roll}, // data
           function(server_data){ //done callback
             $('#die').html(server_data);
           });
  });
});


// alternative to $.post()
    // $.ajax({
    //   url: this.action,
    //   type: this.method,
    //   data: "value="+roll // this is sending the params..
    // })
    // .done(function(server_data){
    //   $('#die').html(server_data);
    // });
