import React from "react";
import { Text, StyleSheet } from "react-native";
export const AppText = props => {
  return (
    <Text style={ { ...styles.text, ...props.style } } >{props.children} </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily:"Baskerville-SemiBold"
  }
})