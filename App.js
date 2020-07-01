import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import MainScreen from './screens/MainScreen';
import TodoScreen from './screens/TodoScreen';
import { THEME } from "./theme";
import * as Font from "expo-font";
import { AppLoading } from "expo";
async function loadApplication() {
  await Font.loadAsync({
    "roboto": require("./assets/fonts/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf")
  })
}
export default function App() {
  const [todos, setTodos] = useState([ 
    {id: "1", title: "Выучить REACT NATIVE"}
   ]);
  const [ todoId, setTodoId ] = useState(null);
  const [ isReady, setIsReady ] = useState(false);
  if(!isReady) {
    return <AppLoading startAsync={ loadApplication } onError={err => console.log(err)} onFinish={() => setIsReady(true)} />
  }
  const addTodo = (title) => {
    setTodos(prev => [...prev,
      {
        id: Date.now(),
        title
      }
      ])
  };
  const removeTodo = id => {
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
  };
  const updateTodo = (id, title) => {
    setTodos(old => old.map(todo => {
      if(todo.id === id) {
        todo.title = title
      }
      return todo;
    }))
  }
  let content = (
    <MainScreen todos={todos} addTodo={addTodo} removeTodo={removeTodo} openTodo={id => setTodoId(id)} />
  );
  if(todoId) {
    const selectedTodo = todos.find(todo => todo.id === todoId)
    content = (
      <TodoScreen todo={selectedTodo} goBack={() => setTodoId(null)} onRemove={removeTodo} onSave={updateTodo} />
    )
  }
  return (
    <SafeAreaView style={styles.container}>
      { content }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.MAIN_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
