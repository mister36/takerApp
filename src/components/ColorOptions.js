import React from "react";
import { View, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import ColorBox from "./ColorBox";

const ColorOptions = ({ navigation, setFolderColor }) => {
  return (
    <View style={styles.container}>
      <ColorBox setFolderColor={setFolderColor} backgroundColor="#000000" />
      <ColorBox setFolderColor={setFolderColor} backgroundColor="#10CD0A" />
      <ColorBox setFolderColor={setFolderColor} backgroundColor="#FF0000" />
      <ColorBox setFolderColor={setFolderColor} backgroundColor="#0792FC" />
      <ColorBox setFolderColor={setFolderColor} backgroundColor="#D50FE4" />
      <ColorBox setFolderColor={setFolderColor} backgroundColor="#AFAFAF" />
      <ColorBox setFolderColor={setFolderColor} backgroundColor="#FFB600" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignSelf: "center",
  },
  box: {
    height: hp(5),
    width: hp(5),
  },
});
export default ColorOptions;
