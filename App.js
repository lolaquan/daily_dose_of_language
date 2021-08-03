import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import WelcomeScreen from './screens/WelcomeScreen';
import Spanish from './screens/Spanish';
import Japanese from './screens/Japanese';
import French from './screens/French';
import { createSwitchNavigator, createAppContainer } from 'react-navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <Container />
    </View>
  );
}

let navigator = createSwitchNavigator({
  WelcomeScreen: WelcomeScreen,
  Spanish: Spanish,
  Japanese: Japanese,
  French: French,
});

const Container = createAppContainer(navigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fefffe',
    padding: 8,
  },
});
