import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { LinearGradient } from "expo-linear-gradient";
import dateFormatter from "../utils/dateFormatter";
import gradientPicker from "../utils/gradientPicker";

const Folder = ({ title, theme, dateCreated, numNotes, navigate, notes }) => {
  return (
    <TouchableOpacity
      style={[styles.container]}
      onPress={() => navigate("FolderView", { notes })} // navigates inside folder
    >
      <LinearGradient
        style={{ flex: 1, borderRadius: hp(5) }}
        colors={gradientPicker(theme)}
      >
        <Text style={[styles.title]}>{title}</Text>
        <Text style={styles.dateCreated}>
          Created {dateFormatter(dateCreated)}
        </Text>
        <Text style={styles.numNotes}>{numNotes} notes</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: hp(3),
    height: hp(15),
    width: wp(80),
    borderRadius: hp(5),
  },
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    marginTop: hp(1),
    fontFamily: "Raleway_500Medium",
  },
  dateCreated: {
    color: "#FFFFFF",
    fontWeight: "100",
    fontStyle: "italic",
    fontSize: 10,
    textAlign: "center",
  },
  numNotes: {
    color: "#FFFFFF",
    fontSize: 18,
    textAlign: "center",
    marginTop: hp(3),
    fontFamily: "Raleway_500Medium",
  },
});

export default Folder;
