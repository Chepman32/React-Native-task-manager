import React from "react";
import { View, StyleSheet, TouchableOpacity, Platform, TouchableNativeFeedback} from "react-native";
export const AppButton = ({ props, children, color, onPress }) => {
  const Wrapper = Platform.OS === "android" ? TouchableNativeFeedback : TouchableOpacity;
  return (
    <Wrapper onPress={onPress} >
      <View style={{ ...styles.button, backgroundColor: color}} >
        { children }
      </View>
    </Wrapper>
  );
};
const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 7
  }
});