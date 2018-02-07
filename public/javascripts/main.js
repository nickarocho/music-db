
//---------- JQUERY INITIALIZERS FOR MATERIALIZE.CSS ----------//

// dropdown selection
$(document).ready(function() {
  $('select').material_select();
});

// autocomplete (w/ Spotify API json hopefully?)
$('input.autocomplete').autocomplete({
  data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250'
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
  // Callback function when value is autcompleted.
  },
  minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
});

// autocomplete (w/ "instruments" enum from credit model)
$('input.autocomplete-instruments').autocomplete({
  data: {
      "Apple": null,
      "Microsoft": null,
      "Google": 'https://placehold.it/250x250'
    },
    limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
    onAutocomplete: function(val) {
  // Callback function when value is autcompleted.
  },
  minLength: 1, // The minimum length of the input for the autocomplete to start. Default: 1.
});

//-------------- ALL OTHER JS --------------//
$('.mdb-submit').click(function(evt) {
  fetch('/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      firstName: $('#firstName').val(),
      lastName:  $('#lastName').val(),
      hometown:  $('#hometown').val()
    })
  })
  .then(data => data.json())
  .then(function(user) {
    console.log(user)
    $('.mdb-userName').text(user.firstName)
  })
})



