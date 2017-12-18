const doc = document;
const ball = doc.getElementById('js-ball');
const body = doc.body;
const height = ball.offsetHeight / 2;
const width = ball.offsetWidth / 2;
function randomColor() {
  const r = Math.random().toFixed(3).toString().slice(2);
  const g = Math.random().toFixed(3).toString().slice(2);
  const b = Math.random().toFixed(3).toString().slice(2);
  return `rgb(${r},${g},${b})`;
}

body.addEventListener('click', (e) => {
  const x = e.clientX;
  const y = e.clientY;
  ball.style.transition = 'all 1s ease-in-out';
  ball.style.backgroundColor = randomColor();
  ball.style.top = `${y - height}px`;
  ball.style.left = `${x - width}px`;
}, false);
