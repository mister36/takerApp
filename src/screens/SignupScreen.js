import React, { useState, useContext } from "react";
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

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <View>
      <View style={styles.topText}>
        <Text style={[styles.header]}>Taker</Text>
        <Text style={[styles.subHeader, { fontFamily: "Raleway_400Regular" }]}>
          Note-taking made easy
        </Text>
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
            placeholder="Email"
            autoCapitalize="none"
            autoCompleteType="email"
            autoCorrect={false}
            placeholderTextColor="#8E8E8E"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            autoCapitalize="none"
            autoCorrect={false}
            autoCompleteType="password"
            placeholderTextColor="#8E8E8E"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            autoCapitalize="none"
            autoCompleteType="password"
            autoCorrect={false}
            placeholderTextColor="#8E8E8E"
            secureTextEntry
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
          />
        </KeyboardAwareScrollView>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            signup(username, email, password, passwordConfirm);
          }}
        >
          <Text style={[styles.buttonText]}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      {state.errorMessage ? (
        <Text
          style={[styles.errorMessage, { fontFamily: "Raleway_400Regular" }]}
        >
          {state.errorMessage}
        </Text>
      ) : null}
      {state.emailMessage ? (
        <Text style={styles.emailMessage}>{state.emailMessage}</Text>
      ) : null}

      <View style={styles.loginText}>
        <Text style={{ fontFamily: "Raleway_400Regular" }}>
          Already have an account?{" "}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text
            style={{
              color: "#4591E7",
              fontWeight: "bold",
              fontFamily: "Raleway_400Regular",
            }}
          >
            Login instead
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
    marginTop: 10,
    textAlign: "center",
    fontFamily: "Raleway_400Regular",
  },
  emailMessage: {
    color: "#B20AC8",
    textAlign: "center",
    marginTop: 10,
    fontFamily: "Raleway_400Regular",
  },
});

export default SignupScreen;
