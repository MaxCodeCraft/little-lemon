function multiplyByTen(num) {
  if (typeof num !== "number") {
    throw new TypeError("Le paramètre doit être un nombre.");
  }
  return num * 10;
}

module.exports = multiplyByTen;
