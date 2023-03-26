function firstJSON(key, value) {
  const test = key;
  const result = "{" + '"' + test + '"' + ":" + '"' + value + '"' + "}";
  return result;
}
