import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import ActiveScreen from '../screens/ActiveScreen';
import TabBarIcon from '../components/TabBarIcon';
import SingleTodoScreen from '../screens/SingleTodoScreen'

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });

  

const ActiveStack = createStackNavigator(
    {
      Active: ActiveScreen,
      SingleTodo: SingleTodoScreen
    },
    config
  );
  
  ActiveStack.navigationOptions = {
    tabBarLabel: 'Active',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-color-wand${focused ? '' : '-outline'}`
            : 'ios-color-wand'
        }
      />
    ),
  };
  
  ActiveStack.path = '';

  export default ActiveStack;