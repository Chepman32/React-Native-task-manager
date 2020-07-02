import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
const TodosItem = ( {id, title, onRemove, onOpen} ) => {
    return (
        <TouchableOpacity onLongPress={() => onRemove(id)} onPress={() => onOpen(id)} style={ styles.flexBlock } >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
};
const styles = StyleSheet.create({
    flexBlock: {
        display: "flex",
        width: width *0.95,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30,
        height: 50,
        borderTopEndRadius: 8,
        borderTopStartRadius: 8,
        borderBottomEndRadius: 8,
        borderBottomStartRadius: 8,
        backgroundColor: "blue"
    },
    text: {
        
        fontSize: 30,
        fontWeight: "bold",
        color: "#fff"
    }
})
export default TodosItem;