(function () {
  /*const form = document.forms[0];
  const color1 = form.elements.colorset1.value;
  const color2 = form.elements.colorset2.value;*/

  const getRGB = function (color) {
    const reg = /[a-z0-9]{2}/ig;
    const value = color.match(reg);
    const c = value.map(elem => parseInt(elem, 16));
    return c;
  };
  const mixColor = function (colorOne, colorTwo) {
    const [r1, g1, b1] = colorOne;
    const [r2, g2, b2] = colorTwo;
    const r = r1 + r2;
    const g = g1 + g2;
    const b = b1 + b2;
    console.log(r);
    console.log(g);
    console.log(b);
    return r1;
  }
  const y = getRGB('00ffff');
  const u = getRGB('ff6798');
  mixColor(y, u);
})();
