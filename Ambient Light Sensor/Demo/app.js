/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

/* global AmbientLightSensor */

try {
  const sensor = new AmbientLightSensor();
  sensor.onreading = function() {
    document.writeln(sensor.illuminance);
  };
  sensor.onerror = function(event) {
    document.writeln(event.error.name, event.error.message);
  };
  sensor.start();
} catch (e) {
  document.writeln(e.message);
}
