/**
 * Transform a date to the required format.
 *
 * @param {string} userDate Date to convert
 * 
 * @return {boolean} Transformed date.
 */
function formatDate(userDate) {
  // Parse the date
  var parseDate = userDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4,4})$/);
  if (parseDate == null) {
    throw new Error("Invalid format");
  }

  var year = parseInt(parseDate[3])
  var month = parseInt(parseDate[2])
  var day = parseInt(parseDate[1])
  
  // Check if date is correct
  if (!checkDate(month, day)) {
    throw new Error("Invalid date");
  }
  
  return `${year}${completeDigits(month)}${completeDigits(day)}`;
}

/**
 * 
 * @param {integer} month 
 * @param {integer} day 
 * 
 * @return {boolean} True if correct date.
 */
function checkDate(month, day) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      if (day > 31) return false;
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      if (day > 30) return false;
      break;
    case 2:
      //FIXME: No leap years considering
      if (day > 28) return false;
      break;
    default:
      return false;
  }
  return true;
}

/**
 * Transform an integer into to digits string.
 * @param {integer} number Number to convert.
 * 
 * @returns {string} Formatted string number.
 */
function completeDigits(number) {
    if (number <= 9) return "0" + number;
    return number
}
