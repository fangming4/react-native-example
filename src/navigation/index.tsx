import React from 'react';
import {Page1, Page2} from 'screens';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export type TRootStackParamList = {
  Page1: undefined;
  Page2: undefined;
};

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Page1" component={Page1} />
        <Drawer.Screen name="Page2" component={Page2} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
