import React from "react";
import { View, StyleSheet } from "react-native";
export const AppCard = (props) => {
  return (
    <View style={{ ...styles.default, ...props.style }} >
      { props.children }
    </View>
  );
};
const styles = StyleSheet.create({
  default: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
    backgroundColor: "#fff",
    borderStyle: "solid",
    elevation: 8,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowOffset: { width: 2, height: 2},
    borderRadius: 10
  }
})