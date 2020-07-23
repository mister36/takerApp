import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  Animated,
  Button,
  Easing,
} from "react-native";
// import Animated from "react-native-reanimated";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const LoadingScreen = () => {
  const moveVal = useRef(new Animated.Value(0)).current;

  const move = () => {
    Animated.loop(
      Animated.timing(moveVal, {
        toValue: 1,
        duration: 4000,
        useNativeDriver: true,
        easing: Easing.linear,
      }).start()
    );
  };

  const spin = moveVal.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "2000deg"],
  });

  move();

  return (
    <View>
      <Animated.Image
        style={[styles.image, { transform: [{ rotate: spin }] }]}
        source={require("../../assets/pencil.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: hp(30),
    width: hp(30),
    alignSelf: "center",
    top: hp(30),
  },
});

export default LoadingScreen;
