/**
 * Created by KorDY on 20.09.2016.
 */

function value(arg) {
  while (typeof arg === 'function') {
    arg = arg();
  }
  return arg;
}

module.exports = value;