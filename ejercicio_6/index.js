const SEP = ".";

const accessor = (obj, defValue, access) => {
  // Return a curryfied function if access is no defined
  if (!access) {
    return caccess => accessor(obj, defValue, caccess);
  }

  if (typeof obj !== "object" || access === "") return defValue;
  let keys = access.split(SEP);
  const current = keys.shift();
  if (typeof obj[current] === "undefined") return defValue;
  if (keys.length > 0) {
    return accessor(obj[current], defValue, keys.join(SEP));
  }
  return obj[current];
};
