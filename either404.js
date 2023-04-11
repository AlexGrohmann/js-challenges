function either404(numbers) {
  let result = false;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 0 && numbers[i + 1] === 0) {
      result = true;
    }
    if (numbers[i] === 4 && numbers[i + 1] === 4) {
      return !result;
    }
  }
  return result;
}
