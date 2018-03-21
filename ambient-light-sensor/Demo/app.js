/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/*

Specification:
https://w3c.github.io/ambient-light/
https://github.com/w3c/ambient-light

Documentation:
https://developer.mozilla.org/en-US/docs/Web/API/AmbientLightSensor

Security:
https://blog.lukaszolejnik.com/stealing-sensitive-browser-data-with-the-w3c-ambient-light-sensor-api/
https://github.com/w3c/ambient-light/commit/23a64553078d054a8057914e93e7e0032bf47b4c

Support:
https://developer.microsoft.com/en-us/microsoft-edge/platform/status/ambientlightsensorapi/

Enable:
chrome://flags/#enable-generic-sensor

*/

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
