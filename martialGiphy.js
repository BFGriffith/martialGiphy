(function(window) {
  'use strict';

  /* initial GIFbuttonArray */
  var martialGIFs = ['Toshiro Mifune', 'Bruce Lee', 'Jet Li', 'Tony Jaa', 'Michelle Yeoh', 'Zhang Ziyi', 'Shaw Brothers'];

  function renderButtons() {
    //prevents repeat buttons
    $('#buttonsView').empty();
    for (var i = 0; i < martialGIFs.length; i++) {
      var a = $('<button>') //generate-button
      a.addClass('martialGIF'); //add a class
      a.attr('data-name', martialGIFs[i]); //add a data-attribute
      a.text(martialGIFs[i]); //provide initial button text
      $('#buttonsView').append(a); //add the button to HTML
    }
  }

  $('#addMartialGIF').on('click', function() {

    // This line of code will grab the input from the textbox
    var martialGIF = $('#martialGIF_input').val().trim();

    // The movie from the textbox is then added to our array
    martialGIFs.push(martialGIF);

    renderButtons();

    //so that users can hit "enter" instead of clicking on the button and it won't move to the next page
    return false;
  })

  // $(document).on('click', '.martialGIF', displayMartialGIF);


  renderButtons();

})(window);
