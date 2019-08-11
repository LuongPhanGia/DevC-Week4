import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TodoStack from './TodoStack';
import ActiveStack from './ActiveStack';
import DoneStack from './DoneStack';

const tabNavigator = createBottomTabNavigator({
  DoneStack,
  TodoStack,
  ActiveStack
});

tabNavigator.path = '';

export default tabNavigator;
