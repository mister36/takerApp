import React, { useContext, useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import NoteContext from "../context/NoteContext";
import HamburgerIcon from "../components/HamburgerIcon";
import Folder from "../components/Folder";
import CreateButton from "../components/CreateButton";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

const MyNotesScreen = ({ navigation }) => {
  const { state, getFolders } = useContext(NoteContext);
  const folders = state.folders;
  const [noFolders, setNoFolders] = useState(false);

  useEffect(() => {
    async function receiveFol() {
      const receivedFolders = await getFolders();
      receivedFolders.length === 0 ? setNoFolders(true) : setNoFolders(false);
    }
    receiveFol();
  }, []);

  return (
    <>
      <HamburgerIcon
        navigation={navigation}
        title="My Folders"
        margin={{ marginBottom: hp(2) }}
      />

      {folders.length > 0 ? (
        <FlatList
          contentContainerStyle={styles.folderList}
          showsVerticalScrollIndicator={false}
          data={folders}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <Folder
                title={item.title}
                theme={item.theme}
                dateCreated={item.dateCreated}
                numNotes={item.numNotes}
                notes={item.notes}
                navigate={navigation.navigate}
              />
            );
          }}
        />
      ) : (
        <Text>Create a folder!</Text>
      )}

      <CreateButton state={folders} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
  },
  folderList: {
    marginTop: hp(4),
    alignItems: "center",
    paddingBottom: hp(10),
  },
});

export default MyNotesScreen;
