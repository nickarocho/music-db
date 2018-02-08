//---------- JQUERY INITIALIZERS for MATERIALIZE.CSS ----------//
function searchSpotify() {
  $('.search-spotify').val()
  console.log($('.search-spotify').val())
  fetch('/api/spotify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: $('.search-spotify').val() })
  })
    .then(res => res.json())
    .then(function (json) {
      console.log(json)
      $('input.autocomplete').autocomplete({
        data: json,
        limit: 20,
        onAutocomplete: function (val) {
          // Callback function when value is autcompleted.
        },
        minLength: 1,
      });
    });
}
$(document).ready(function() {
  // dropdown selection
  $('select').material_select();
  // autocomplete (w/ "instruments" enum from credit model)
  fetch('/api/credits')
    .then(res => res.json())
    .then(function(json) {
      $('input.autocomplete-instruments').autocomplete({
        data: json,
        limit: 20,
        onAutocomplete: function(val) {
        // Callback function when value is autcompleted.
        },
        minLength: 1,
      });
    });
    var credits;
    
    document.getElementById('add-credit').addEventListener('click', function (evt) {
      evt.preventDefault();
      fetch('/api/credits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: $('#action').val(),
          instrument: $('.autocomplete-instruments').val(),
          artist: $('.search-spotify').val()
        }),
        credentials: 'include'
      })
        .then(res => res.json())
        .then(data => {
          // var idx = credits.findIndex(c => c._id === data._id);
          // credits[idx] = data;
          window.location.reload();
        });
    });
});








