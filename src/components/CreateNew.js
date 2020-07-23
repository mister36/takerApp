import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Modal from "react-native-modal";
import ColorOptions from "./ColorOptions";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import hexToColor from "../utils/hexToColor";
import NoteContext from "../context/NoteContext";

const CreateNew = ({ modalVisible, setModalVisible }) => {
  const { createFolder } = useContext(NoteContext);

  const [titleGiven, setTitleGiven] = useState("");
  const [folderColor, setFolderColor] = useState("#000000");

  return (
    <>
      <Modal
        animationIn={"zoomIn"}
        animationOut={"zoomOut"}
        hideModalContentWhileAnimating={true}
        isVisible={modalVisible}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={[styles.modalBox, { backgroundColor: folderColor }]}>
          <Text style={[styles.newFolderTextHeader]}>Create New Folder</Text>
          <TextInput
            style={[styles.inputTitle]}
            placeholder="Title"
            value={titleGiven}
            onChangeText={setTitleGiven}
          />
          <ColorOptions setFolderColor={setFolderColor} />
          <TouchableOpacity
            style={styles.cancel}
            onPress={() => setModalVisible(false)}
          >
            <Text style={{ fontFamily: "Raleway_300Light" }}>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.enter}
            onPress={() => {
              createFolder(titleGiven, hexToColor(folderColor));
              setModalVisible(false);
              setTitleGiven("");
            }}
          >
            <Text style={{ fontFamily: "Raleway_300Light" }}>Enter</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  modalBox: {
    height: hp(35),
    borderRadius: 10,
  },
  newFolderTextHeader: {
    fontSize: 30,
    textAlign: "center",
    color: "#FFFFFF",
    marginTop: hp(1),
    textShadowRadius: 3,
    textShadowColor: "black",
    fontFamily: "Raleway_300Light",
  },
  inputTitle: {
    borderBottomWidth: 1,
    marginTop: hp(3),
    width: wp(80),
    alignSelf: "center",
    fontSize: 20,
    marginBottom: hp(4),
    color: "white",
    textShadowColor: "black",
    textShadowRadius: 6,
    fontFamily: "Raleway_300Light",
  },
  cancel: {
    position: "absolute",
    bottom: hp(2),
    right: wp(2),
    backgroundColor: "#F35A0C",
    height: hp(5),
    width: wp(20),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
  },
  enter: {
    position: "absolute",
    bottom: hp(2),
    right: wp(30),
    height: hp(5),
    width: wp(20),
    backgroundColor: "#A5F619",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CreateNew;
