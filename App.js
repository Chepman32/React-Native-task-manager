import React, {useState} from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { TodoState } from './context/TodoState';
import { MainLayout } from './MainLayout';
import { ScreenState } from './context/screen/ScreenState';
async function loadApplication() {
  await Font.loadAsync({
    "Baskerville-SemiBold": require("./assets/fonts/CarroisGothic-Regular.ttf"),
    "CarroisGothic-Regular": require("./assets/fonts/Baskerville-SemiBold.ttf")
  })
}
export default function App() {
  const [ isReady, setIsReady ] = useState(false);
  if(!isReady) {
    return <AppLoading startAsync={ loadApplication } onError={err => console.log(err)} onFinish={() => setIsReady(true)} />
  }
  return (
    <ScreenState>
      <TodoState>
      <MainLayout/>
    </TodoState>
    </ScreenState>
  );
}