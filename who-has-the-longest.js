function longest(string) {
  let count = 0;
  let highscore = 0;
  if (string.length === 0) {
    return 0;
  }
  if (string.length === 1) {
    return 1;
  }
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === string.charAt(i + 1)) {
      count++;
    } else {
      if (highscore < count) {
        highscore = count;
      }
      count = 0;
    }
  }
  return highscore + 1;
}
