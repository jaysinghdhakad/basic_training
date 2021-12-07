//Given a randomized array containing 49 integers between 0 and 49 and a number missing, find the missing number, insert it into the array, sort the array and print it in ascending order using map function
function addMissingInteger(inputArray) {
  const accending = (a, b) => a - b;
  let missingNum;
  inputArray.sort(accending);
  for (let i = 0; i <= 49; i++) {
    if (!(inputArray[i] == i)) {
      inputArray.splice(i, 0, i);
      missingNum = i;
      break;
    }
  }
  console.log(`the missing number is ${missingNum}`);
  inputArray.map((item, index) => {
    console.log(`${item} at index ${index}`);
  });
}
//find duplicate numbers in an array if it contains multiple duplicates, delete all the duplicate numbers and trim the array to make it contain only distinct numbers also find the size and first 5 numbers of the final array?
function findDublicateAndDelete(inputArray) {
  const reducer = (a, b) => {
    b in a ? (a[b] = a[b] + 1) : (a[b] = 1);
    return a;
  };
  const frequencyObject = inputArray.reduce(reducer, {});
  const keys = Object.keys(frequencyObject);
  keys.map((item) => {
    console.log(frequencyObject[item], item);
    if (frequencyObject[item] > 1) {
      let itteration = frequencyObject[item];
      while (itteration > 1) {
        const index = inputArray.lastIndexOf(parseInt(item));
        inputArray.splice(index, 1);
        itteration--;
      }
    }
  });
  console.log(` the size of final array is ${inputArray.length}`);
  console.log(
    [inputArray[0], inputArray[1], inputArray[2], inputArray[3], inputArray[4]],
    "they are the first 5 element of output array "
  );
  return inputArray;
}
// Given two strings, You have to find if the two strings are anagrams (same characters, same quantity). Only consider characters, regardless of spaces/punctuations.
function checkAnagram(str1, str2) {
  const reducer = (a, b) => {
    b in a ? (a[b] = a[b] + 1) : (a[b] = 1);
    return a;
  };
  let output;
  const letterFrequencyStr1 = [...str1].reduce(reducer, {});
  const letterFrequencyStr2 = [...str2].reduce(reducer, {});
  const keys = Object.keys(letterFrequencyStr1);
  keys.forEach((letter) => {
    letter in letterFrequencyStr2
      ? letterFrequencyStr1[letter] == letterFrequencyStr2[letter]
        ? (output = true)
        : (output = false)
      : (output = false);
  });
  return output;
}
//Given a string, find if the string is palindrome or not if yes then return true else remove all the duplicate characters from the string and print the string.
function checkPalindrome(str) {
  let isPalindrome;
  const length = str.length;
  for (let i = 0; i < Math.floor(length / 2); i++) {
    str[i] === str[length - 1 - i]
      ? (isPalindrome = true)
      : (isPalindrome = false);
  }
  if (isPalindrome) return isPalindrome;
  let arrayFromStr = [...str];
  const reducer = (a, b) => {
    b in a ? (a[b] = a[b] + 1) : (a[b] = 1);
    return a;
  };
  const frequencyObject = arrayFromStr.reduce(reducer, {});
  const keys = Object.keys(frequencyObject);
  keys.map((item) => {
    if (frequencyObject[item] > 1) {
      let itteration = frequencyObject[item];
      while (itteration > 1) {
        const index = arrayFromStr.lastIndexOf(parseInt(item));
        arrayFromStr.splice(index, 1);
        itteration--;
      }
    }
  });
  return arrayFromStr.join("");
}
