/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

function startVibrateHandler() {
  // Vibrate 3 times with pauses of 100 milliseconds.
  // The vibrations should be longer each time.
  window.navigator.vibrate([100, 100, 300, 100, 500]);

  console.log('Vibrated');
}

function stopVibrateHandler() {
  // Cancels any currently ongoing vibration.
  window.navigator.vibrate(0);

  console.log('Vibration stopped');
}

document.querySelector('#start').addEventListener('click', startVibrateHandler);
document.querySelector('#stop').addEventListener('click', stopVibrateHandler);
