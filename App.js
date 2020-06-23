import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import {AddTodo} from "./components/AddTodo";
import TodosItem from "./components/Todo";

export default function App() {
  const [todos, setTodos] = useState([
  ]);
  const addTodo = (title) => {
    setTodos(prev => [...prev,
      {
        id: Date.now(),
        title
      }
      ])
  }
  const removeTodo = id => {
    setTodos(todos.filter(t => t.id != id))
  }
  return (
    <SafeAreaView style={styles.container}>
      <AddTodo onSubmit={addTodo}/>
      <ScrollView>
        {
          todos.map(t => <TodosItem key={t.id} id={t.id} title={t.title} onRemove={removeTodo}/>)
        }
      </ScrollView>
    </SafeAreaView>
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
