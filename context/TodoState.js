import React, { useReducer, useContext } from "react";
import { TodoContext } from "./todoContext";
import { Alert } from "react-native"
import {todoReducer} from "./todoReducer";
import { ADD_TODO, REMOVE_TODO, UPDATE_TODO, SHOW_LOADER, HIDE_LOADER, SHOW_ERROR, CLEAN_ERROR, FETCH_TODOS } from "./types";
import { ScreenContext } from "./screen/screenContext";
import { Http } from "../http"
export const TodoState = ({children}) => {
  const initialState = {
    todos: [],
    isLoading: false,
    error: null
  }
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { changeScreen } = useContext(ScreenContext);
  const addTodo = async title => {
    const data = await Http.post(`https://fir-android-ios-6299f.firebaseio.com/todos.json`, {title});
    console.log("Data", data);
    dispatch({ type: ADD_TODO, title, id: data.name })
  }
  const removeTodo = id => {
    const todo = state.todos.find(t => t.id === id)
    Alert.alert(
      `Удаление элемента`,
      `Вы уверены что хотите удалить ${todo.title}?`,
      [
        {
          text: 'Отмена',
          onPress: () => console.log('Удаление отменено'),
          style: 'cancel'
        },
        { text: 'Удалить', onPress: async () => {
          await fetch(`https://fir-android-ios-6299f.firebaseio.com/todos/${id}.json`,{
            method: "DELETE",
          headers: {"Content-Type": "application/json"}
          })
          changeScreen(null)
    dispatch({type: REMOVE_TODO, id})
        } }
      ],
      { cancelable: false }
    );
  }
  const updateTodo = async (id, title) => {
    cleanError()
    try {
      await fetch(`https://fir-android-ios-6299f.firebaseio.com/todos/${id}.json`, {
      method: "PATCH",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({title})
    });
    dispatch({type: UPDATE_TODO, id, title});
    }
    catch(e) {
      showError("Ошибка...");
      console.log(e);
    }
  };
  const showLoader = () => dispatch({type: SHOW_LOADER});
  const hideLoader = () => dispatch({type: HIDE_LOADER});
  const showError = (error) => dispatch({type: SHOW_ERROR, error});
  const cleanError = () => dispatch({type: CLEAN_ERROR});
  const fetchData = async () => {
    showLoader();
    cleanError();
  try {
    const response = await fetch("https://fir-android-ios-6299f.firebaseio.com/todos.json", {
  method: "GET",  
  headers: {"Content-Type": "application/json"}
  });
  const data = await response.json();
  const todos = Object.keys(data).map(key => ({ ...data[key], id: key }));
  dispatch({type: FETCH_TODOS, todos})
  }
  catch(e) {
    showError("Ошибка...");
    console.log(e);
  }
  finally {
    hideLoader();
  }
  };
  return <TodoContext.Provider value={{
    todos: state.todos, addTodo, removeTodo, updateTodo, fetchData, isLoading: state.isLoading, error: state.error
  }}
  >
    { children }
  </TodoContext.Provider>
}