import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
const TodosItem = ( {id, title, onRemove} ) => {
    return (
        <TouchableOpacity onLongPress={() => onRemove(id)} >
            <Text>{title}</Text>
        </TouchableOpacity>
    )
};
export default TodosItem;