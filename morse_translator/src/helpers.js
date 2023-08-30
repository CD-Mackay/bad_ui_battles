import morseChart from "./constants";

const translate = (string) => {
  // turn string into array of arrays
  let array = string.split(" ");
  let finalArr = [];
  for (let element of array) {
    let newEl = element.split("");
    finalArr.push(newEl);
  }
  let morseArr = [];
  for (let element of finalArr) {
    let subArr = [];
    for (let character of element) {
      let morseChar = morseChart[character];
      subArr.push(morseChar);
    }
    morseArr.push(subArr);
  }
  // convert each subarray character into morse
  let final = [];
  for (let element of morseArr) {
    let newEl = element.join("*");
    final.push(newEl);
  }
  final = final.join("/");
  return final;
};

const findReverse = (object, character) => {
  for (const property in object) {
    if (object[property] === character) {
      return property;
    }
  }
}

const reverseTranslate = (s) => {
  let array = s.split("/");
  console.log(array);
  let finalArr = [];
  for (let element of array) {
    let newEl = element.split("*");
    let subArr = [];
    for (let element of newEl) {
      let char = findReverse(morseChart, element);
      subArr.push(char);
    }
    subArr = subArr.join("")
    finalArr.push(subArr);
  }
  finalArr = finalArr.join(" ");
  return finalArr;
};
export { translate, reverseTranslate };
