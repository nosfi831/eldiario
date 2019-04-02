function removeProperty(obj, prop) {
  if (typeof obj !== "object" || typeof obj[prop] === "undefined") {
    return false;
  }

  delete obj[prop];
  return true;
}
