(function(window) {
  'use strict';

  /* initial GIFbuttonArray */
  var martialGIFs = ['Toshiro Mifune', 'Shaw Brothers', 'Bruce Lee', 'Jet Li', 'Tony Jaa', 'Michelle Yeoh', 'Zhang Ziyi', 'Donnie Yen', 'Jackie Chan', 'Jean-Claude Van Damme', 'Steven Seagal', 'Chuck Norris',
  'Inigo Montoya', 'Last Samurai', 'Rob Roy', 'Blade', 'Deadpool', 'Jedi', 'Darth Vader', 'Darth Maul', 'Ninja Scroll', 'Last Airbender'];

  function displayMartialGIF() {

    var martialGIF = $(this).attr('data-name');
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + martialGIF + "&api_key=dc6zaTOxFJmzC";

    // AJAX call
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).done(function(response) {
      console.log(response);
      // new <div>
      var martialGIFdiv = $('<div class="martialGiphy">');
      var g;
      for (g = 0; g < response.data.length; g++) {
      // create GIF
      var image = $('<img>').attr("src", response.data[g].images.downsized_large.url);
      // appends GIF
      martialGIFdiv.append(image);
      };
      // retrieves rating data
      var rating = response.data[0].rating;

      // Creates an element to have the rating displayed
      var pRating = $('<p>').text("Rating= " + rating);

      // display rating
      martialGIFdiv.append(pRating);

      $('#martialGiphyView').prepend(martialGIFdiv);
    });

  }

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
  };

  $('#addMartialGIF').on('click', function() {
    //grab the input from the textbox
    var martialGIF = $('#martialGIF_input').val().trim();

    //martial-arts query from the textbox is added to the array
    martialGIFs.push(martialGIF);

    renderButtons();

    //so that users can hit "enter" instead of clicking on the button and it won't move to the next page
    return false;
  });

  $(document).on('click', '.martialGIF', displayMartialGIF);

  renderButtons();

})(window);
