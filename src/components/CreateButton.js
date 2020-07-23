import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import CreateNew from "./CreateNew";

const CreateButton = ({ fontStyle, state }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <AntDesign name="plus" style={styles.plusSign} color="black" />
      </TouchableOpacity>

      <CreateNew
        modalVisible={modalVisible}
        fontStyle={fontStyle}
        setModalVisible={setModalVisible}
        state={state}
      />
    </>
  );
};

const styles = StyleSheet.create({
  plusSign: {
    fontSize: hp(6),
  },
  button: {
    borderRadius: hp(6) / 2,
    position: "absolute",
    top: hp(75),
    right: wp(10),
    backgroundColor: "#FFFFFF",
    height: hp(10),
    width: hp(10),
    borderRadius: hp(10) / 2,
    borderWidth: 0.1,
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateButton;
