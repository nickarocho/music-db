//---------- JQUERY INITIALIZERS for MATERIALIZE.CSS ----------//
$(document).ready(function() {
  // dropdown selection
  $('select').material_select();

  // autocomplete (via Spotify API)
  // $('input.autocomplete').autocomplete({
  //   data: {
  //       "Apple": null,
  //       "Microsoft": null,
  //       "Google": 'https://placehold.it/250x250'
  //     },
  //     limit: 20,
  //     onAutocomplete: function(val) {
  //   // Callback function when value is autcompleted.
  //   },
  //   minLength: 1,
  // });

  // // autocomplete (w/ "instruments" enum from credit model)
  // fetch('/api/credits')
  //   .then(res => res.json())
  //   .then(json => console.log(json))
  //   .then(function(json) {
  //     $('input.autocomplete-instruments').autocomplete({
  //       data: {"apple": null},
  //       limit: 20, // The max amount of results that can be shown at once. Default: Infinity.
  //       onAutocomplete: function(val) {
  //       // Callback function when value is autcompleted.
  //       },
  //       minLength: 1,
  //     });
  //   });
});


  // $('.mdb-submit').click(function(evt) {
  //   fetch('/users', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       firstName: $('#firstName').val(),
  //       lastName:  $('#lastName').val(),
  //       hometown:  $('#hometown').val()
  //     })
  //   })
  //   .then(data => data.json())
  //   .then(function(user) {
  //     console.log(user)
  //     $('.mdb-userName').text(user.firstName)
  //   });
  // })




