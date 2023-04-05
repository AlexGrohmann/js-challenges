function getPrice(item) {
  const a = item.indexOf("(");

  const b = item.indexOf(")");

  return item.slice(a + 1, b);
}
