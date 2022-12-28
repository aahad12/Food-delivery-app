import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native';
import {Provider as ReduxProvider} from "react-redux";
import configureStore from '../redux/store';

import Home from '../screens/Home';
import RestaurantDetails from '../screens/RestaurantDetails';
import OrderCompleted from '../screens/OrderCompleted';

const store = configureStore();

export default function DetailsNavigation() {
    const Stack = createStackNavigator();

    const screenOptions = {
        headerShown :false,
    };

  return (
      <ReduxProvider store={store}>
          <Stack.Navigator screenOptions={screenOptions}>
              <Stack.Screen name='home' component={Home} />
              <Stack.Screen name='RestaurantDetails' component={RestaurantDetails} />
              <Stack.Screen name='OrderCompleted' component={OrderCompleted} />
          </Stack.Navigator>
      </ReduxProvider>
  );
}