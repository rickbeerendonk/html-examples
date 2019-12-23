/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

try {
  const sensor = new AmbientLightSensor();
  sensor.onreading = function(event) {
    document.writeln(sensor.illuminance);
  };
  sensor.onerror = function(event) {
    document.writeln(event.error.name, event.error.message);
  };
  sensor.start();
} catch (e) {
  document.writeln(e.message);
}
