function palindrome(pali) {
  let result = "";
  for (let i = pali.length - 1; i >= 0; i--) {
    result += pali[i];
  }
  return result === pali;
}
