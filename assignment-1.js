// Problem 1: Complete the secondLargest function which takes in an array of numbers in input and return the second biggest number in the array. (without using sort)?
function secondLargest(array) {
  const reducer = (previousValue, currentValue) =>
    previousValue >= currentValue ? previousValue : currentValue;
  let output;
  for (let i = 1; i <= 2; i++) {
    output = array.reduce(reducer);
    const index = array.indexOf(output);
    inputArray.splice(index, 1);
  }
  return output;
}

// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) {
  const stringArray = [...string.replace(/[^a-zA-Z]/g, "")];
  const reducer = (a, b) => {
    b in a ? (a[b] = a[b] + 1) : (a[b] = 1);
    return a;
  };
  return stringArray.reduce(reducer, {});
}

// Problem 3: Complete the flatten function that takes a JS Object, returns a JS Object in flatten format (compressed)
function flatten(unflatObject) {
  let result = {};
  for (const i in unflatObject) {
    if (typeof unflatObject[i] !== "object") {
      result[i] = unflatObject[i];
    }
    if (!Array.isArray(unflatObject[i])) {
      const temp = flatten(unflatObject[i]);
      for (const j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      const temp = flatten(Object.assign({}, unflatObject[i]));
      for (const j in temp) {
        result[i + "." + j] = temp[j];
      }
    }
  }
  return result;
}

// Problem 4: Complete the unflatten function that takes a JS Object, returns a JS Object in unflatten format
function unflatten(flatObject) {
  let result = {};
  let temp;
  for (let property in flatObject) {
    let subStrings = property.split(".");
    temp = result;
    for (let i = 0; i < subStrings.length - 1; i++) {
      if (!(subStrings[i] in temp)) {
        if (isFinite(subStrings[i + 1])) {
          temp[subStrings[i]] = [];
        } else {
          temp[subStrings[i]] = {};
        }
      }
      temp = temp[subStrings[i]];
    }
    temp[subStrings[subStrings.length - 1]] = flatObject[property];
  }
  return result;
}
