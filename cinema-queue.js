function cinemaQueue(max, visitors) {
  let count = 0;

  for (const element of visitors) {
    if (element === "X") {
      count++;
    }
  }

  if (count === max) {
    return "full";
  } else {
    if (max - count > 0) {
      const diff = max - count;

      return "not full: " + diff;
    } else {
      const diff = count - max;

      return "too much: " + diff;
    }
  }
}
