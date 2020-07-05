import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { THEME } from "./theme";
import MainScreen from "./screens/MainScreen";
import TodoScreen from "./screens/TodoScreen";
import { TodoContext } from "./context/todoContext";
import { ScreenContext } from "./context/screen/screenContext"
export const MainLayout = () => {
  const { todoId } = useContext(ScreenContext);
  return (
    <SafeAreaView style={styles.container}>
      { todoId ? <TodoScreen/> : <MainScreen/> }
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});