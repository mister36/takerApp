const hexToColor = (hex) => {
  switch (hex) {
    case "#000000":
      return "black";
    case "#10CD0A":
      return "green";
    case "#FF0000":
      return "red";
    case "#0792FC":
      return "blue";
    case "#D50FE4":
      return "purple";
    case "#AFAFAF":
      return "gray";
    case "#FFB600":
      return "yellow";
    default:
      return "gray";
  }
};

// export const colorToHex = (color) => {
//   switch (color) {
//     case "black":
//       return "#000000";
//     case "green":
//       return "#10CD0A";
//     case "red":
//       return "#FF0000";
//     case "blue":
//       return "#0792FC";
//     case "purple":
//       return "#D50FE4";
//     case "gray":
//       return "#AFAFAF";
//     case "yellow":
//       return "#FFB600";
//     default:
//       return "#AFAFAF";
//   }
// };

export default hexToColor;
