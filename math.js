function add(a, b) {
  return a - b; // တမင်မှားထားတာ
}

function isEven(n) {
  return n % 2 === 0;
}

function capitalize(str) {
  if (str.length === 0) {
    return str;
  }

  return str[0].toUpperCase() + str.slice(1);
}

module.exports = { add, isEven, capitalize };
