import React from "react";
import { StyleSheet } from "react-native";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const returnNoteImg = (typeNote) => {
  switch (typeNote) {
    case "basic":
      return (
        <FontAwesome
          name="sticky-note"
          size={24}
          color="black"
          style={styles.img}
        />
      );
    case "reminder":
      return (
        <FontAwesome
          name="clock-o"
          size={24}
          color="black"
          style={styles.img}
        />
      );
    case "shopping":
      return (
        <FontAwesome
          name="shopping-cart"
          size={24}
          color="black"
          style={styles.img}
        />
      );
    case "work":
      return (
        <MaterialCommunityIcons
          name="office-building"
          size={24}
          color="black"
          style={styles.img}
        />
      );
    case "chores":
      return (
        <MaterialCommunityIcons
          name="broom"
          size={24}
          color="black"
          style={styles.img}
        />
      );
    case "school":
      return (
        <MaterialCommunityIcons
          name="school"
          size={24}
          color="black"
          style={styles.img}
        />
      );
  }
};

const styles = StyleSheet.create({
  img: {
    position: "absolute",
    bottom: hp(1),
    right: hp(1),
  },
});

export default returnNoteImg;
