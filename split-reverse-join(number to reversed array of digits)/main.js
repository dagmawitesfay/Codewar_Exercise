function digitize(n) {
  return String(n).split("").reverse().join("").split("").map(Number)
}