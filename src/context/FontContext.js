import React from "react";
import useFonts, { fontList } from "../../assets/fonts";
import LoadingScreen from "../screens/LoadingScreen";

const FontContext = React.createContext();

export const FontProvider = ({ children }) => {
  const [fontsLoaded] = useFonts(fontList);

  if (!fontsLoaded) {
    return <LoadingScreen />;
  } else {
    return <FontContext.Provider>{children}</FontContext.Provider>;
  }
};

export default FontContext;
