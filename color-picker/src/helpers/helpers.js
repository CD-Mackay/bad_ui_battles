const showMonth = (num) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return months[num - 1];
};

const showYear = (num) => {
  let number = num.toString();
  if (number.length === 1) {
    number = "0" + number
    return number;
  }
  return number
};

export { showMonth, showYear };
