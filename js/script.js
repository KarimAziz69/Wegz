const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

calculateButton.addEventListener('click', function() {
  const startTime = document.getElementById('start-time').value;
  const finishTime = document.getElementById('finish-time').value;
  const activity = document.getElementById('activity').value;
  let startHour = parseInt(startTime.split(':')[0]);
  let startMinute = parseInt(startTime.split(':')[1]);
  let finishHour = parseInt(finishTime.split(':')[0]);
  let finishMinute = parseInt(finishTime.split(':')[1]);
  
  // Error checking to make sure start and finish times are valid
  if (isNaN(startHour) || isNaN(startMinute) || isNaN(finishHour) || isNaN(finishMinute)) {
    resultDiv.innerHTML = 'Invalid time format';
    return;
  }
  
  // Convert start and finish times to minutes
  const startTotalMinutes = startHour * 60 + startMinute;
  const finishTotalMinutes = finishHour * 60 + finishMinute;
  
  // Calculate the difference in minutes
  const diffMinutes = finishTotalMinutes - startTotalMinutes;
  
  // Determine the price per minute based on the activity
  let pricePerMinute = 0;
  if (activity === 'playstation') {
    pricePerMinute = 0.332;
  } else if (activity === 'pool') {
    pricePerMinute = 0.666;
  }
  
  // Calculate the total price and display it
  const totalPrice = Math.round(diffMinutes * pricePerMinute);
  resultDiv.innerHTML = `Total price: £${totalPrice}`;
});
