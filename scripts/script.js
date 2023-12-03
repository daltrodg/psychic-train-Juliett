$(document).ready(function() {
  $('#linkCardButton').on('click', linkCard);
  $('#validateButton').on('click', validateExpiration);
});

function validateExpiration() {
  var month = $('#expirationMonth').val();
  var year = $('#expirationYear').val();
  var resultDiv = $('#result1');
  
  // Clear previous messages
  resultDiv.html('');

  // Validate month (01 to 12)
  if (isNaN(month) || parseInt(month) < 1 || parseInt(month) > 12) {
    resultDiv.text('Error: Please enter a valid month (01 to 12).');
    return;
  }

  // Validate year (not in the past)
  var currentYear = new Date().getFullYear() % 100; // Get the last two digits of the current year
  if (isNaN(year) || parseInt(year) < currentYear) {
    resultDiv.text('Error: Please enter a valid year (not in the past).');
    return;
  }

  // Display the entered values
  resultDiv.text(month + '/' + year);
}

function linkCard() {
  var selectedBank = $('input[name="bank"]:checked').val();
  var resultDiv = $('#result2');

  if (!selectedBank) {
    resultDiv.text('Error: Please select your bank.');
    return;
  }

  // Clear previous messages
  resultDiv.html('');

  // Display the linked card message
  resultDiv.text('Your ' + selectedBank + ' Card has been linked!');
}