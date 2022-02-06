import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MakeHome } from '../factories/screens';
import { MakeSeeMore } from '../factories/screens/see-more';

const Stack = createNativeStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="home" component={MakeHome} />
      <Stack.Screen name="seeMore" component={MakeSeeMore} />
    </Stack.Navigator>
  );
}