const btn = document.querySelector('#btn');
const preview = document.querySelector('.select');
const body = document.body;
function getRandomColor() {
  const r = Math.ceil(Math.random() * 255).toPrecision(3);
  const g = Math.ceil(Math.random() * 255).toPrecision(3);
  const b = Math.ceil(Math.random() * 255).toPrecision(3);
  return `${r}, ${g}, ${b}`;
}
const createDiv = function event(e) {
  e.preventDefault();
  let zIndex = 0;
  const div = document.createElement('div');
  div.style.width = `${(Math.random() * 200).toPrecision(3)}px`;
  div.style.top = `${(Math.random() * screen.height).toPrecision(3)}px`;
  div.style.left = `${(Math.random() * 500).toPrecision(3)}px`;
  div.style.height = `${(Math.random() * 200).toPrecision(3)}px`;
  div.classList.add('boxy');
  div.style.zIndex = zIndex;
  div.style.background = `rgb(${getRandomColor()})`;
  body.appendChild(div);
  zIndex += 1;
};
btn.addEventListener('click', createDiv, false);
let tar = null;
function initMove(e) {
  e.preventDefault();
  tar = e.target;
}
function initMove1(e) {
  e.preventDefault();
  console.log(e);
}
function moveElement(e) {
  if (tar) {
    e.preventDefault();
    const middle = {
      x: e.target.clientWidth / 2,
      y: e.target.clientHeight / 2,
    };
    tar.style.top = `${e.clientY - middle.y}px`;
    tar.style.left = `${e.clientX - middle.x}px`;
  }
}
body.addEventListener('mousedown', initMove, false);
body.addEventListener('dragstart', initMove1, false);
body.addEventListener('mousemove', moveElement, false);
body.addEventListener('click', () => {
  tar = null;
}, false);
preview.addEventListener('mouseover', (e) => {
  if (e.relatedTarget === tar) {
    e.target.style.background = 'purple';
  }
}, false);
preview.addEventListener('mouseleave', (e) => {
  e.target.style.background = 'rebeccapurple';
}, false);
