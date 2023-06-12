function circularRepeat(s, n) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  if (result.length > 100) {
    result = result.slice(0, 100);
  }
  return result;
}
