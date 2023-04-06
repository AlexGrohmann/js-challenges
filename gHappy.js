function gHappy(string) {
  let countG = 0;

  let countHappy = 0;

  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === "g") {
      if (string.charAt(i + 1) === "g" || string.charAt(i - 1) === "g") {
        countHappy++;
      }

      countG++;
    }
  }

  return countG > 0 && countG === countHappy;
}
