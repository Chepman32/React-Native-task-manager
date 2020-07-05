import React, { useState, useContext } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";
import { AppTextBold } from "../components/ui/AppTextBold";
import { AppButton } from "../components/ui/AppButton";
import { AppText } from "../components/ui/AppText";
import { TodoContext } from "../context/todoContext";
import { ScreenContext } from "../context/screen/screenContext";
const TodoScreen = ({ }) => {
  const [visible, setVisible] = useState(false);
  const { todos, removeTodo, updateTodo } = useContext(TodoContext);
  const { changeScreen, todoId } = useContext(ScreenContext)
  const todo = todos.find(t => t.id === todoId);
  const saveHandler = title => {
    updateTodo(todo.id, title);
    setVisible(false);
  }
  return (
    <View>
      <EditModal modal={visible} onCancel={ () => setVisible(false) } onSave={saveHandler} />
      <AppCard style={styles.card}>
      <AppTextBold style={ styles.title }>
        { todo.title }
      </AppTextBold>
      <Button title="Ред." onPress={() => setVisible(true)} />
      </AppCard>
      <View style={ styles.buttons }>
  <View style={styles.button}>
  <AppButton style={styles.goBackBtn} onPress={() => changeScreen(null)} color={ THEME.GREY_COLOR }>
  <AppText style={{color: THEME.MAIN_COLOR, fontSize: 30}} >Назад</AppText>
  </AppButton>
  </View>
  <View style={styles.button}>
  <Button style={styles.goBackBtn} title="Удалить" onPress={() => removeTodo(todo.id)} color={ THEME.DANGER_COLOR } />
  </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  button: {
    width: "40%"
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  card: {
    padding: 15,
    marginBottom: 20
  },
  title: {fontSize: 20,
color: "tomato"
  }
})
export default TodoScreen