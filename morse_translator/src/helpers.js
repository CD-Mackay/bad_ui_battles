import morseData from "./constants";

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
      let morseChar = morseData[character];
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

export default translate;