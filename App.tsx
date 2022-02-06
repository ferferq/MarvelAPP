import React from 'react';

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_900Black
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { MakeApp } from './src/main';

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
    <MakeApp />
  );
}