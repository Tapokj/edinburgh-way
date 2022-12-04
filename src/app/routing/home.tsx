import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {BusTrackerHomePage} from '../../pages/BusTrackerHome';

const Stack = createNativeStackNavigator();

export function HomeScreens() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="BusTracker">
      <Stack.Screen name="BusTracker" component={BusTrackerHomePage} />
    </Stack.Navigator>
  );
}
