import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AddTodo} from "./components/AddTodo";

export default function App() {
  const [todos, setTodos] = useState([
  ]);
  const addTodo = (title) => {
    setTodos(prev => [...prev,
      {
        id: Date.now().toString(),
        title
      }
      ])
  }
  return (
    <View style={styles.container}>
      <AddTodo onSubmit={addTodo}/>
      {
        todos.map(t => <Text key={t.id}>{t.title}</Text>)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
