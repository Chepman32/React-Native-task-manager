import React from "react";
import { Text, StyleSheet } from "react-native";
export const AppText = props => {
  return (
    <Text style={ { ...styles.text, ...props.styles } } >{props.children} </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontFamily:"roboto-regular"
  }
})