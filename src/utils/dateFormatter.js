const dateFormatter = (date) => {
  const dateFormatted = new Date(date);
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
  return `${
    months[dateFormatted.getMonth()]
  } ${dateFormatted.getDate()}, ${dateFormatted.getFullYear()}`;
};

export default dateFormatter;
