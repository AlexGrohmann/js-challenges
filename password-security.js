function checkPassword(password, password_repeat) {
  return password === password_repeat && password.length >= 20;
}
