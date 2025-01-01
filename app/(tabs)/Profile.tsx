import React from "react";
import { View, StyleSheet, Text } from "react-native";
import * as Animatable from "react-native-animatable";

const AnimatedContainers = () => {
  return (
    <View style={styles.screen}>
      {Array.from({ length: 5 }).map((_, index) => (
        <Animatable.View
          key={index}
          animation="tada"
          iterationCount="infinite"
          delay={index * 200}
          style={styles.box}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#fff",
    flexDirection: "row",

  },
  box: {
    width: 50,
    height: 50,
    borderRadius: 5,
    backgroundColor: "purple",
    marginVertical: 10,
  },
});

export default AnimatedContainers;
