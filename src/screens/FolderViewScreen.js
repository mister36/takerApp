import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import Note from "../components/Note";

const FolderViewScreen = ({ route }) => {
  const { notes } = route.params;
  return (
    <>
      {notes ? (
        <FlatList
          contentContainerStyle={styles.noteList}
          columnWrapperStyle={{ justifyContent: "space-around" }}
          numColumns={2}
          data={notes}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            console.log(item);
            return (
              <Note
                theme={item.theme}
                description={item.description}
                type={item.type}
              />
            );
          }}
        />
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  noteList: {
    marginTop: 25,
  },
});

export default FolderViewScreen;
