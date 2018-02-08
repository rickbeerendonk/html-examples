/*! Mozilla Public License Version 2.0 !*/
/*! Copyright © 2017 Rick Beerendonk   !*/

/*

API:
https://w3c.github.io/battery/
https://github.com/w3c/battery/

Documentation:
https://developer.mozilla.org/en-US/docs/Web/API/Battery_Status_API

*/

if ('getBattery' in navigator) {
  // We get the initial value when the promise resolves ...
  navigator.getBattery().then(function(battery) {
    console.log(battery.name);
    console.log(battery.level);
    console.log(battery.charging ? 'charging' : 'not charging');
    console.log(battery.chargingTime / 60 + ' minutes remaining');
    console.log(battery.dischargingTime / 60 + ' minutes remaining');
    // ... and any subsequent updates.
    battery.onchargingchange = function() {
      console.log(battery.charging ? 'charging' : 'not charging');
    };
    battery.onchargingtimechange = function() {
      console.log(battery.chargingTime / 60 + ' minutes until charged');
    };
    battery.ondischargingtimechange = function() {
      console.log(battery.dischargingTime / 60 + ' minutes remaining');
    };
    battery.onlevelchange = function() {
      console.log(this.level);
    };
  });
} else {
  console.warn('No battery support.');
}
