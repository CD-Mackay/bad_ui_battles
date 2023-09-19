const validatePass = (value, error) => {
  let errorObj = { ...error };
  if (/\d/.test(value)) {
    errorObj["password must contain a number"] = true;
    errorObj["password must include the word robot"] = false;
  }

  if (value.includes("robot")) {
    errorObj["password must include the word robot"] = true;
    errorObj["password must contain the phrase zoop"] = false;
  }
  if (value.includes("zoop")) {
    errorObj["password must contain the phrase zoop"] = true;
    errorObj[
      "after you slide to the left, you must slide to the ______"
    ] = false;
  }
  if (value.includes("right")) {
    errorObj[
      "after you slide to the left, you must slide to the ______"
    ] = true;
    errorObj["password must contain zz"] = false;
  }
  if (value.includes("zz")) {
    errorObj["password must contain zz"] = true;
    errorObj["press f to pay respects"] = false;
  }
  if (value.includes("f")) {
    errorObj["press f to pay respects"] = true;
  }
  // setError(errorObj);
  return errorObj;
};

const addCodeFrag = (code, stringFrag) => {
  let codeCopy = stringFrag;
  codeCopy = codeCopy + code;
  // setStringFrag(codeCopy);
  return codeCopy;
};

const addChar = (newChar, fullString) => {
  let stringCopy = fullString;
  stringCopy = stringCopy + newChar;
  // setFullString(stringCopy);
  return stringCopy;
};


export { validatePass, addCodeFrag, addChar }