import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import { THEME } from "../theme";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";
const TodoScreen = ({ goBack, todo, onRemove, onSave }) => {
  const [visible, setVisible] = useState(false);
  const saveHandler = title => {
    onSave(todo.id, title);
    setVisible(false);
  }
  return (
    <View>
      <EditModal modal={visible} onCancel={ () => setVisible(false) } onSave={saveHandler} />
      <AppCard style={styles.card}>
      <Text style={ styles.title }>
        { todo.title }
      </Text>
      <Button title="Ред." onPress={() => setVisible(true)} />
      </AppCard>
      <View style={ styles.buttons }>
  <View style={styles.button}>
  <Button style={styles.goBackBtn} title="Назад" onPress={goBack} color={ THEME.GREY_COLOR } />
  </View>
  <View style={styles.button}>
  <Button style={styles.goBackBtn} title="Удалить" onPress={() => onRemove(todo.id)} color={ THEME.DANGER_COLOR } />
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
  title: {
fontFamily: "Baskerville-SemiBold",
fontSize: 20
  }
})
export default TodoScreen