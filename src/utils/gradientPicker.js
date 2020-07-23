const gradientPicker = (color) => {
  switch (color) {
    case "black":
      return ["#000000", "rgba(0, 0, 0, .7)"];
    case "green":
      return ["#10CD0A", "rgba(81, 219, 77, .5)"];
    case "red":
      return ["#FF0000", "rgba(250, 89, 89, .5)"];
    case "blue":
      return ["#0792FC", "rgba(89, 193, 250, .5)"];
    case "purple":
      return ["#D50FE4", "rgba(225, 72, 237, .5)"];
    case "gray":
      return ["#AFAFAF", "rgba(218, 218, 218, .8)"];
    case "yellow":
      return ["#FFB600", "rgba(255, 201, 67, .5)"];
    case "green":
      return ["#1BD605", "rgba(71, 221, 53, .5)"];
    default:
      return ["#AFAFAF", "rgba(218, 218, 218, .8)"];
  }
};

export default gradientPicker;
