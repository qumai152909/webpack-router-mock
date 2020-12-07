function add(a, b) {
  return a + b;
}
function sum(c, d) {
  console.log('sum tree shaking');
  return c + d;
}
export { add, sum };
