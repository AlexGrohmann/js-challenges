function keyboardError(correct, wrong) {
  let chars = [];

  for (let i = 0; i < correct.length; i++) {
    if (!(correct.charAt(i) === wrong.charAt(i))) {
      if (!chars.includes(correct.charAt(i))) {
        chars.push(correct.charAt(i));
      }
    }
  }
  return chars;
}
