import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
export const AddTodo = ({ onSubmit }) => {
    const todoHandler = () => {
        if(value.trim()) {
            onSubmit("элемент");
        }
        else {

        }
    }
    const [ value, setValue ] = useState("")
    return (
        <View >
            <Button onPress={ todoHandler } title="Добавить заметку"/>
            <TextInput style={styles.input} value={ value } onChangeText={ setValue }/>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 20,
        width: 200,
        padding: 15,
        color: "#ccc",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#000"
    }
})