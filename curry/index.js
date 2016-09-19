
function curry(fn) {
  function curryOuter(a) {
    var argsLength = fn.length;
    var args = Array.prototype.slice.apply(arguments);

    function returnFN() {
      return argsLength === args.length ? fn.apply(null, args) : curryInner.bind(null, args.length);
    }

    function curryInner(argsLengthCurrent, b) {
      if (argsLengthCurrent !== args.length) args = args.slice(0, argsLengthCurrent);
      args.push(b);
      return returnFN();
    }

    return returnFN();
  }
  return curryOuter;
}
module.exports = curry;
