import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export default class WelcomeScreen extends React.Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>Languages</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Spanish')}>
          <Text style={styles.buttonText}>Spanish</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Japanese')}>
          <Text style={styles.buttonText}>Japanese</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('French')}>
          <Text style={styles.buttonText}>French</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: RFValue(40),
    fontFamily: 'Cochin',
    color: '#414241',
    textAlign: 'center',
    marginBottom: 50,
    backgroundColor: '#58cb00',
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#20aff7',
    margin: 30,
  },

  buttonText: {
    fontSize: RFValue(16),
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fefffe',
  },
});
