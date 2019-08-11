import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import TodoScreen from '../screens/TodoScreen';
import TabBarIcon from '../components/TabBarIcon';
import SingleTodoScreen from '../screens/SingleTodoScreen'

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });

  

const TodoStack = createStackNavigator(
    {
      Todo: TodoScreen,
      SingleTodo: SingleTodoScreen
    },
    config
  );
  
  TodoStack.navigationOptions = {
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-add-circle-outline${focused ? '' : '-outline'}`
            : 'ios-add-circle-outline'
        }
      />
    ),
  };
  
  TodoStack.path = '';

  export default TodoStack;