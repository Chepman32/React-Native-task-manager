import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, Alert, Keyboard, Platform, Dimensions } from 'react-native';
export const AddTodo = ({ onSubmit }) => {
    const [ value, setValue ] = useState("");
    const todoHandler = () => {
        if(value.trim()) {
            onSubmit(value);
            setValue("")
            Keyboard.dismiss()
        }
        else {
Alert.alert("название не может быть пустым")
        }
    }
    return (
        <ScrollView >
            <View style={styles.container}>
            <TextInput style={styles.input} value={ value } onChangeText={ setValue } keyboardType="email-address" autoCompleteType="password" placeholder="Введите название заметки" autoCorrect={false} autoCapitalize="words"/>
            <View style={{...styles.button, ...Platform.select({
                android: styles.btnAndroid,
                ios: styles.btnIos
            })
        }} >
            <Button title="Добавить заметку" onPress={ todoHandler } color="#fff" />
        </View>
            
            </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        width: "70%",
        padding: 15,
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "#000",
        marginTop: 25,
        marginBottom: 25,
        marginRight: 20,
        borderRadius: 4,
        fontSize: 15,
    },
    button: {
        width: "15%",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 7
    },
    btnAndroid: {
        backgroundColor: "violet"
          },
          btnIos: {
            backgroundColor: "tomato",
            height: 40,
            width: "50%",
            color: "#000"
          }
})