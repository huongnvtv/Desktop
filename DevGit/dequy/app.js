var array = ['a', 'b', 'c', 'd', 'a', 'b', 'd'];
console.log([...new Set(array)]);

function run(x, y) {
  x++;
  if (x < y - 1) return [x].concat(run(x, y));
  return [y - 1];
}
console.log(run(1, 5));
