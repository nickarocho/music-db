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
  // modal
  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    inDuration: 300, // Transition in duration
    outDuration: 200, // Transition out duration
    opacity: .4, // Opacity of modal background
    startingTop: '20%', // Starting top style attribute
    endingTop: '10%', // Ending top style attribute
    ready: function(modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
      console.log(modal, trigger);
    },
    complete: function() {} // Callback for Modal close
  });
  // dropdown selection
  $('select').material_select();
  // autocomplete (w/ "instruments" enum from credit model)
  fetch('/api/instruments')
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
    
    var addCreditEl = document.getElementById('add-credit');
    if (addCreditEl) addCreditEl.addEventListener('click', function (evt) {
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
    
function deleteCredit(creditId) {
  fetch(`/api/credits/${creditId}`, {
    method: 'DELETE',
    credentials: 'include'
  })
  .then(res => res.json())
  .then(data => {
    window.location.reload();
  })
}








