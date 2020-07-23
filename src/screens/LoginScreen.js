import React, { useState, useContext, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AuthContext from "../context/AuthContext";
import LoadingScreen from "./LoadingScreen";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { state, login } = useContext(AuthContext);

  return (
    <View>
      <View style={[styles.topText]}>
        <Text style={[styles.header]}>Taker</Text>
        <Text style={[styles.subHeader]}>Note-taking made easy</Text>
      </View>

      <View>
        <KeyboardAwareScrollView
          style={styles.signupContainer}
          enableOnAndroid={true}
          showsVerticalScrollIndicator={false}
        >
          <TextInput
            style={styles.input}
            placeholder="Username"
            autoCapitalize="none"
            autoCompleteType="username"
            autoCorrect={false}
            placeholderTextColor="#8E8E8E"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            placeholderTextColor="#8E8E8E"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
        </KeyboardAwareScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            login(username, password);
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      {state.errorMessage ? (
        <Text style={styles.errorMessage}>{state.errorMessage}</Text>
      ) : null}

      <View style={[styles.loginText]}>
        <Text style={{ fontFamily: "Raleway_400Regular" }}>
          Don't have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("SignupScreen")}>
          <Text
            style={{
              color: "#4591E7",
              fontWeight: "bold",
              fontFamily: "Raleway_400Regular",
            }}
          >
            Sign up instead
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  topText: {
    marginTop: hp(10),
    alignItems: "center",
  },
  header: {
    fontSize: 70,
    color: "#64D394",
    fontFamily: "Raleway_400Regular",
  },
  subHeader: {
    color: "#64D394",
    fontSize: 20,
    fontFamily: "Raleway_400Regular",
  },
  signupContainer: {
    //signup box
    marginTop: hp(5),
    maxHeight: hp(45),
    marginHorizontal: wp(5),
    borderRadius: 10,
    // backgroundColor: "white",
  },
  input: {
    borderRadius: 10,
    color: "black",
    marginTop: hp(3),
    marginHorizontal: wp(2),
    height: hp(6),
    fontSize: 18,
    backgroundColor: "#92D8B0",
    paddingVertical: hp(1),
    paddingLeft: wp(2),
    fontFamily: "Raleway_400Regular",
  },
  button: {
    borderRadius: 10,
    width: wp(50),
    height: hp(7),
    alignItems: "center",
    alignSelf: "center",
    marginTop: hp(3),
    justifyContent: "center",
    backgroundColor: "#09A9B7",
  },
  buttonText: {
    justifyContent: "center",
    fontFamily: "Raleway_400Regular",
  },
  loginText: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: hp(3),
    fontFamily: "Raleway_400Regular",
  },
  errorMessage: {
    color: "#C80A0A",
    alignSelf: "center",
    marginTop: 10,
    fontFamily: "Raleway_400Regular",
  },
});

export default LoginScreen;
