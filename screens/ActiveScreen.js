import * as WebBrowser from 'expo-web-browser';
import React, { useState } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  ImageBackground
} from 'react-native';

import { TODOS } from '../components/data';


const TodoItem = props => {
  const statusStyle = {
    backgroundColor: props.todo.status === 'Done' ? 'blue' : 'green'
  };
  const onLongPress = todo => {
    const prompt = `"${todo.body}"`;
    Alert.alert(
      'Delete your todo?',
      prompt,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => props.onDeleteTodo(todo.id) }
      ],
      { cancelable: true }
    );
  };
  return (
    <TouchableOpacity
      key={props.todo.body}
      style={[styles.todoItem, statusStyle]}
      onPress={() => props.onToggleTodo(props.todo.id)}
      onLongPress={() => onLongPress(props.todo)}
    >
      <Text style={styles.todoText}>
        {props.idx + 1}: {props.todo.body}
      </Text>
    </TouchableOpacity>
  );
};

export default function ActiveScreen(props) {

  const [todoList, setTodoList] = useState(TODOS);

  const onToggleTodo = id => {
    const todo = todoList.find(todo => todo.id === id);
    //todo.status = todo.status === 'Done' ? 'Active' : 'Done';
    const foundIndex = todoList.findIndex(todo => todo.id === id);
    todoList[foundIndex] = todo;
    const newTodoList = [...todoList];
    setTodoList(newTodoList);

    setTimeout(() => {
      props.navigation.navigate('SingleTodo', {
        updatedTodo: todo
      });
    }, 500);
  };

  const onDeleteTodo = id => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    setTodoList(newTodoList);
  };
  

  const filterActive = todoList.filter(todo => todo.status === 'Active')
  return (
    <View style={styles.container}>

      {/* image background */}
      <View>
        <ImageBackground
          source={{ uri: 'https://cdn.pixabay.com/photo/2016/06/17/06/04/background-1462755_960_720.jpg' }}
          style={[styles.imageBackground, styles.fixed, { zIndex: -1 }]}
        />
      </View>
      {/* end image background */}

      {/* body */}
        {/* ScrollView */}
        <ScrollView style={styles.container}>
          {
            filterActive.map((todo, idx) => {
              return (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  idx={idx}
                  onToggleTodo={onToggleTodo}
                  onDeleteTodo={onDeleteTodo}
                />
              )
            })
          }
        </ScrollView>
        {/* end ScrollView */}

      {/* end body */}
    </View>
  );
}

ActiveScreen.navigationOptions = {
  title: 'Active',
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  todoItem: {
    margin: 5,
    padding: 10,
    width: '95%',
    minHeight: 20,
    color: 'white',
    borderRadius: 5,
    flexWrap: 'wrap'
  },
  todoText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold'
  },
  imageBackground: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  fixed: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
});
