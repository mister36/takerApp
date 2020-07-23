import React, { useContext } from "react";
import { View, StyleSheet, Text, Button } from "react-native";
import AuthContext from "../context/AuthContext";
import HamburgerIcon from "../components/HamburgerIcon";

const AccountScreen = ({ navigation }) => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <HamburgerIcon navigation={navigation} />
      <Button title="LogOut" onPress={logout} />
    </View>
  );
};

const styles = StyleSheet.create({});
export default AccountScreen;
