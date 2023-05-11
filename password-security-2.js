function checkPassword(password, password_repeat) {
  if (password !== password_repeat) {
    return false;
  }
  if (password.length < 8) {
    return false;
  }
  let hasNumber = false;
  let hasUpperCase = false;
  let hasLowerCase = false;
  let specialChar = false;
  for (let i = 0; i < password.length; i++) {
    let c = password[i];
    if (c >= 0 && c <= 9) {
      hasNumber = true;
    }
    if (c == c.toUpperCase()) {
      hasUpperCase = true;
    }
    if (c == c.toLowerCase()) {
      hasLowerCase = true;
    }
    if (
      c == "&" ||
      c == "(" ||
      c == "$" ||
      c == "%" ||
      c == "§" ||
      c == "-" ||
      c == "_" ||
      c == ")"
    ) {
      specialChar = true;
    }
  }
  if (!hasNumber) {
    return false;
  }
  if (!hasUpperCase) {
    return false;
  }
  if (!hasLowerCase) {
    return false;
  }
  if (!specialChar) {
    return false;
  }
  return true;
}
