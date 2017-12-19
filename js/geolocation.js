const btn = document.getElementById('btn');
const b = document.getElementById('b');
const date = document.getElementById('output');
const d = document.getElementById('out');
let errorM = ' ';
let pos = ' ';
btn.addEventListener('click', (e) => {
  e.preventDefault();
  function success(position) {
    const cor = position.coords;

    pos = `Coordinates:
      latitude: ${cor.latitude},
      longitude: ${cor.longitude},
      altitude: ${cor.altitude},
      speed: ${cor.speed},
      time: ${cor.timestamp},
      heading: ${cor.heading}`;
  }

  function error(err) {
    errorM = `Error code = ${err.code}, Error message = ${err.message}`;
  }

  const option = {
    timeout: 30000,
    enableHighAccuracy: true,
    maximumAge: 0,
  };

  navigator.geolocation.getCurrentPosition(success, error, option);
}, false);
b.addEventListener('click', (e) => {
  e.preventDefault();
  date.innerHTML = errorM;
  d.innerHTML = pos;
}, false);
