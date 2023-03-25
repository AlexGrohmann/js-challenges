function countOdds(numbers) {
  let oddCount = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
      oddCount++;
    }
  }

  return oddCount;
}
