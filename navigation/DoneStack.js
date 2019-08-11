import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import DoneScreen from '../screens/DoneScreen';
import TabBarIcon from '../components/TabBarIcon';
import SingleTodoScreen from '../screens/SingleTodoScreen'

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });

  

const DoneStack = createStackNavigator(
    {
      Done: DoneScreen,
      SingleTodo: SingleTodoScreen
    },
    config
  );
  
  DoneStack.navigationOptions = {
    tabBarLabel: 'Done',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon
        focused={focused}
        name={
          Platform.OS === 'ios'
            ? `ios-checkmark-circle-outline${focused ? '' : '-outline'}`
            : 'ios-checkmark-circle-outline'
        }
      />
    ),
  };
  
  DoneStack.path = '';

  export default DoneStack;