import React from 'react';
import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_900Black
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading'; 
import { StatusBar } from 'expo-status-bar';
import { MakeHome } from './src/main/factories/pages';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_900Black
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <>
      <StatusBar style='dark' />
      <MakeHome />
    </>
  );
}