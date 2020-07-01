import React, { useState } from "react";
import { View, Modal, Button, StyleSheet, TextInput, Alert } from "react-native";
import { THEME } from "../theme";
export const EditModal = ({ modal, onCancel, value, onSave }) => {
  const saveHandler = () => {
    if(title.trim().length < 3) {
      Alert.alert(`Длина заметки должна быть больше 3 символов. Сейчас ${title.trim().length} символов`)
    }
    else {
      onSave(title);
    }
  }
  const [ title, setTitle ] = useState (value);
  return (
    <Modal visible={ modal } animationType="slide" >
      <View style={ styles.modalWrap } >
        <TextInput style={styles.input} value={title} onChangeText={setTitle} placeholder="Введите название" maxLength={64} />
        <View style={styles.buttons}>
        <Button title="Отменить" onPress={ onCancel } color={ THEME.DANGER_COLOR } />
        <Button title="Сохранить" onPress={ saveHandler } />
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalWrap: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  input: {
    width: "90%",
    padding: 10,
    marginBottom: 40,
    borderBottomWidth: 2,
    borderColor: THEME.GREY_COLOR
  },
  buttons: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around"
  }
})