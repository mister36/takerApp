import React, { useState, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Animated,
  Button,
  PanResponder,
} from "react-native";

const FriendsScreen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        console.log("PAN RESPONDER");
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value,
        });
      },
      onPanResponderMove: (_, gesture) => {
        // console.log("ARGS", { ...args[1] });
        pan.x.setValue(gesture.dx);
        pan.y.setValue(gesture.dy);
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      },
    })
  ).current;

  console.log(pan.getLayout());

  return (
    <View style={{ flex: 1 }}>
      <Animated.View
        style={[
          {
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "red",
          },
          pan.getLayout(),
        ]}
        {...panResponder.panHandlers}
      />

      {/* <Button title="Fade in" onPress={fadeInBAll} />
      <Button title="Fade out" onPress={fadeOutBAll} /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

export default FriendsScreen;
