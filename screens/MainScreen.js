import React, { useState, useEffect, useContext, useCallback } from "react";
import { ScrollView, View, Text, StyleSheet, Image, Dimensions, ActivityIndicator, Button } from "react-native";
import { AddTodo } from "../components/AddTodo";
import TodosItem from "../components/TodosItem";
import { TodoContext } from "../context/todoContext";
import { ScreenContext } from "../context/screen/screenContext";
const { width } = Dimensions.get("screen");
const MainScreen = ({  }) => {
  const { addTodo, todos, removeTodo, fetchData, isLoading, error } = useContext(TodoContext);
  const loadTodos = useCallback( async () => await fetchData, [fetchData])
  useEffect(() => {
    fetchData();
  }, [])
  const {changeScreen} = useContext(ScreenContext)
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
  if(isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />
  }
  if(error) {
    return (
      <View>
        <Button title="Повторить" onPress={() => fetchData()} />
        <Text style={{fontSize: 50}}>{ error }</Text>
      </View>
    )
  }
  let content = (
    <ScrollView style={{ width: deviceWidth}} >
      <View style={{...styles.container}} >
      {
          todos.map(t => <TodosItem key={t.id} id={t.id} title={t.title} onRemove={removeTodo} onOpen={changeScreen} todo={t} />)
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