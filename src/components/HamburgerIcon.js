import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const HamburgerIcon = ({ navigation, title, margin }) => {
  return (
    <View style={[styles.container, margin]}>
      <TouchableOpacity
        style={styles.safe}
        onPress={() => navigation.openDrawer()}
      >
        <MaterialIcons name="menu" size={35} color="black" />
      </TouchableOpacity>
      <Text style={[styles.title]}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  safe: {
    marginTop: Platform.OS === "android" ? 25 : 0,
    marginLeft: 10,
    alignSelf: "flex-end",
  },
  title: {
    marginTop: Platform.OS === "android" ? 25 : 0,
    fontSize: 35,
    marginLeft: wp(15),
    marginBottom: -2,
    fontFamily: "Raleway_300Light",
  },
});

export default HamburgerIcon;
