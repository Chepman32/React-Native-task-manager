import React from "react";
import { Text, StyleSheet } from "react-native";
export const AppTextBold = props => {
  return (
    <Text style={ { ...styles.text, ...props.style } } >{props.children} </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily:"Baskerville-SemiBold",
    fontSize: 30
  }
})