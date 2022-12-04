/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { HomeScreens } from 'src/app/routing';
import { useGeoSubscriber } from 'src/shared/geolocation';
import { useEffect } from 'react';
import { operatorsModel } from 'src/entities/national-operators';

const App = () => {
   useGeoSubscriber();

   useEffect(() => {
      operatorsModel.getOperators();
   });

   return (
      <NavigationContainer>
         <HomeScreens />
      </NavigationContainer>
   );
};

export default App;
