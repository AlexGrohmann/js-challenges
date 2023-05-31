function swap(numbers) {
  const end = numbers.length - 1;
  const pos1 = numbers[0];
  const posLast = numbers[end];
  numbers[0] = posLast;
  numbers[end] = pos1;
  return numbers;
}
