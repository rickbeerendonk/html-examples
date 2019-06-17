/*! European Union Public License version 1.2 !*/
/*! Copyright © 2019 Rick Beerendonk          !*/

function vibrateHandler() {
  // Vibrate 3 times with pauses of 100 milliseconds.
  // The vibrations should be longer each time.
  window.navigator.vibrate([100, 100, 300, 100, 500]);

  console.log('Vibrated');
}

const elem = document.getElementById('vibrate');
elem.addEventListener('click', vibrateHandler);
