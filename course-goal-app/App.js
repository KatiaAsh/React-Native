import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [coursGoals, setCourseGoals] = useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    //...: spread operator, JS featre which takes an existing array and course goals is an array
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: enteredGoal}]);
  };

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          //without parentheses, cuz this would execute this function when this code gets parsed
          //when the UI gets rendered for the first time. you don't want to execute this immediately.
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      {/*FlatList: has 2 important properties
      The first property is the data property where you point at your input data, and it should point at array.
      The second property is render ite,, that takes a function which is called for every item in your data to render a list item */}
      <FlatList 
      // The key extractor property which takes a function that tells FlatList how to extract your key and by default
      keyExtractor={(item, index) => item.id}
        data={coursGoals} 
        renderItem={itemData => (
          <View style={styles.listItem}>
            <Text>{itemData.item.value}</Text>
          </View>
        )} />

      {/* {coursGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>))} */}
    </View>
  );
}

//The argument are passing here ia a javascript object and in that object,
//can now define the styles.
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: 200,
    borderBottomColor:
      'black',
    borderBottomWidth: 1
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  },
});
