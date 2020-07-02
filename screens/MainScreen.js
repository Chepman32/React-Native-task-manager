import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { AddTodo } from "../components/AddTodo";
import TodosItem from "../components/TodosItem";
const { width, height } = Dimensions.get("screen");
const MainScreen = ({ addTodo, todos, removeTodo, openTodo }) => {
  const [deviceWidth, setDeviceWidth] = useState(Dimensions.get("window").width);
  useEffect(() => {
    const update = () => {
      const width = Dimensions.get("window").width;
      setDeviceWidth(width);
    }
    Dimensions.addEventListener("change", update)
    return () => {
      Dimensions.removeEventListener("change", update)
    };
  });
  let content = (
    <ScrollView style={{ width: deviceWidth}} >
      <View style={{...styles.container}} >
      {
          todos.map(t => <TodosItem key={t.id} id={t.id} title={t.title} onRemove={removeTodo} onOpen={openTodo} todo={t} />)
        }
      </View>
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
  container: {
justifyContent: "center",
alignItems: "center"
  },
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