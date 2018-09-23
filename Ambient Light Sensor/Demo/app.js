/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

try {
  const sensor = new AmbientLightSensor();
  sensor.onreading = function(event) {
    console.log(sensor.illuminance);
  };  
  sensor.onerror = function(event) {
    console.log(event.error.name, event.error.message);
  };
  sensor.start();
} catch (e) {
  document.writeln(e.message);
}
