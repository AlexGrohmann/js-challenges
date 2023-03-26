function strangeWord(word) {
  let newWord = "";

  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      newWord = newWord + word[i];
    }
  }

  return newWord;
}
