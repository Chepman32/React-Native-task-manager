import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert } from 'react-native';
export const AddTodo = ({ onSubmit }) => {
    const todoHandler = () => {
        if(value.trim()) {
            onSubmit(value);
            setValue("")
        }
        else {
Alert.alert("название не может быть пустым")
        }
    }
    const [ value, setValue ] = useState("")
    return (
        <ScrollView >
            <Button onPress={ todoHandler } title="Добавить заметку"/>
            <TextInput style={styles.input} value={ value } onChangeText={ setValue } keyboardType="email-address" autoCompleteType="password" placeholder="Введите название заметки" autoCorrect={false} autoCapitalize="words"/>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        padding: 15,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#000",
        marginTop: 25,
        marginBottom: 25,
    }
})