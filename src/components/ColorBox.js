import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";

const ColorBox = ({ backgroundColor, setFolderColor }) => {
  return (
    <TouchableOpacity
      onPress={() => setFolderColor(backgroundColor)}
      activeOpacity={0.5}
    >
      <View style={[styles.box, { backgroundColor }]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  box: {
    height: hp(5),
    width: hp(5),
  },
});

export default ColorBox;
