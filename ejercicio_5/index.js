function reorderInt(number) {
  // TODO: Check parameter type.
  var splitted = number.toString().split("");
  return parseInt(
    splitted
      .sort(function(a, b) {
        return a < b;
      })
      .join("")
  );
}
