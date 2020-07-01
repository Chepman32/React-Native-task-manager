import React from "react";
import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { AddTodo } from "../components/AddTodo";
import TodosItem from "../components/TodosItem";
const { width, height } = Dimensions.get("screen");
const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  let content = (
    <ScrollView>
        {
          todos.map(t => <TodosItem key={t.id} id={t.id} title={t.title} onRemove={removeTodo} onOpen={openTodo} todo={t} />)
        }
      </ScrollView>
  )
  if(todos.length === 0) {
    content = (
      <View style={styles.imgWrap}>
        <Image style={styles.img} source={require("../assets/no-items.png")}/>
      </View>
    )
  }
  return (
    <View>
      <AddTodo onSubmit={addTodo}/>
      {content}
    </View>
  );
};
const styles = StyleSheet.create({
  imgWrap: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10
  },
  img: {
    width: width * 0.8,
    resizeMode: "contain"
  }
})
export default MainScreen;