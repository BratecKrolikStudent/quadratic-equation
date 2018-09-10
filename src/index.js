module.exports = function solveEquation(equation) {
  let arr = equation.match(/[^\^][\-? ?]?\d+/g).map(item => +item.replace(/\s+/g,'').toString());
  let [ a, b, c ] = arr;

  b = b / a;
  c = c / a;
  a = a / a;

  let d = Math.pow(b, 2) - 4 * a * c;
  let x1 = (-b + Math.sqrt(d)) / 2*a;
  let x2 = (-b - Math.sqrt(d)) / 2*a;

  return [ x2, x1 ];
}
