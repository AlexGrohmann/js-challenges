function easyLoop() {
  let result = "";

  for (let i = 0; i < 100; i++) {
    if (i % 7 === 0) {
      result = result + i.toString();
    }
  }

  return result;
}
