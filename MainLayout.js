import React, { useState, useContext } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { THEME } from "./theme";
import MainScreen from "./screens/MainScreen";
import TodoScreen from "./screens/TodoScreen";
import { TodoContext } from "./context/todoContext";
import { ScreenContext } from "./context/screen/screenContext"
export const MainLayout = () => {
  const {todos, addTodo, removeTodo, updateTodo} = useContext(TodoContext);
  const { changeScreen,  todoId } = useContext(ScreenContext)

  /* const removeTodo = id => {
    const todo = todos.find(t => t.id === id)
    Alert.alert(
      `Удаление элемента`,
      `Вы уверены что хотите удалить ${todo.title}?`,
      [
        {
          text: 'Отмена',
          onPress: () => console.log('Удаление отменено'),
          style: 'cancel'
        },
        { text: 'Удалить', onPress: (prev) => {
          setTodoId(null);
          setTodos(prev => prev.filter(t => t.id != id));
        } }
      ],
      { cancelable: false }
    );
  }; */
  let content = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={changeScreen} />
  );
  if(todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = (
      <TodoScreen todo={selectedTodo} goBack={() => changeScreen(null)} onRemove={removeTodo} onSave={updateTodo} />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      { content }
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