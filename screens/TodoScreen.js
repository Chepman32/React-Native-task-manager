import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions } from "react-native";
import { Feather } from '@expo/vector-icons';
import { THEME } from "../theme";
import { AppCard } from "../components/ui/AppCard";
import { EditModal } from "../components/EditModal";
import { AppTextBold } from "../components/ui/AppTextBold";
import { AppButton } from "../components/ui/AppButton";
import { AppText } from "../components/ui/AppText";
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
      <AppTextBold style={ styles.title }>
        { todo.title }
      </AppTextBold>
      <Button title="Ред." onPress={() => setVisible(true)} />
      </AppCard>
      <View style={ styles.buttons }>
  <View style={styles.button}>
  <AppButton style={styles.goBackBtn} onPress={goBack} color={ THEME.GREY_COLOR }>
  <AppText style={{color: THEME.MAIN_COLOR, fontSize: 30}} >Назад</AppText>
  </AppButton>
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
  title: {fontSize: 20,
color: "tomato"
  }
})
export default TodoScreen