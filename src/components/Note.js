import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import gradientPicker from "../utils/gradientPicker";
import returnNoteImg from "../utils/returnNoteImg";

const Note = ({ theme, description, type }) => {
  return (
    <LinearGradient style={[styles.container]} colors={gradientPicker(theme)}>
      <Text style={styles.description}>{description}</Text>
      {returnNoteImg(type)}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: hp(2),
    height: hp(15),
    width: wp(45),
  },
  description: {
    fontSize: 20,
    fontFamily: "Raleway_400Regular",
  },
});

export default Note;
