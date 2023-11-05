$(document).ready(function () {
  const checked = {};
  $('input[type=checkbox').change(
    function () {
      if (this.checked) {
        checked[($(this).attr('data-id'))] = $(this).attr('data-name');
      } else {
        delete checked[($(this).attr('data-id'))];
      }
      if (Object.keys(checked).length === 0) {
        $('.amenities h4').html('&nbsp;');
      } else {
        console.log(checked);
        $('.amenities h4').text(Object.values(checked));
      }
    });
});

$(document).ready(function () {
  const url = 'http://' + window.location.hostname + ':5001/api/v1/status/';

  $.get(url, function (response) {
    if (response.status == 'OK') {
      if($('#api_status').hasClass('available')) {
        $('#api_status').removeClass('available')
      } else {
        $('#api_status').addClass('available')
      }
    }
  });
});
