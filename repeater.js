function repeater(string, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += string.slice(0, n - i);
  }
  return result;
}
