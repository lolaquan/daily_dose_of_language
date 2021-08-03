import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ImageBackground,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import * as Speech from 'expo-speech';
import dictionary from '../spanishTranslation';
import { Header, Icon } from 'react-native-elements';
import { RFValue } from 'react-native-responsive-fontsize';

export default class Spanish extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      isSearchPressed: false,
      isLoading: false,
      word: 'Loading...',
      textToSpeech: '',
      definition: '',
      back: '',
    };
  }

  back = () => {
    this.props.navigation.navigate('WelcomeScreen');
  };

  getWord = (text) => {
    var text = text.toLowerCase();
    try {
      var word = dictionary[text]['word'];

      var definition = dictionary[text]['definition'];
      this.setState({
        word: word,

        definition: definition,
      });
    } catch (err) {
      alert('This word is not available in our dictionary ');
      this.setState({
        text: '',
        isSearchPressed: false,
      });
    }
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground
          source={require('../assets/IMG_0308.JPG')}
          style={styles.backgroundImage}>
          <View>
            <Header
              centerComponent={{
                text: 'Espanol',
                style: {
                  color: 'white',
                  fontSize: RFValue(30),
                  fontFamily: 'times',
                },
              }}
              leftComponent={
                <Icon
                  name="arrow-left"
                  type="feather"
                  color="white"
                  onPress={this.back}
                />
              }
            />
            <View>
              <TextInput
                style={styles.inputBox}
                onChangeText={(text) => {
                  this.setState({
                    text: text,
                    isSearchPressed: false,
                    word: 'Please wait...',

                    examples: [],
                    defination: '',
                  });
                }}
                value={this.state.text}
              />

              <TouchableOpacity
                style={styles.searchButton}
                onPress={() => {
                  this.setState({ isSearchPressed: true });
                  this.getWord(this.state.text);
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontFamily: 'times',
                    fontSize: RFValue(20),
                    alignSelf: 'center',
                    fontWeight: 'bold',
                  }}>
                  Search
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.outputContainer}>
              <Text style={{ fontSize: RFValue(20) }}>
                {this.state.isSearchPressed && this.state.word === 'Loading...'
                  ? this.state.word
                  : ''}
              </Text>
              {this.state.word !== 'Loading...' ? (
                <View
                  style={{
                    justifyContent: 'center',
                    marginLeft: 10,
                    backgroundColor: '#fff',
                  }}>
                  <View style={styles.textIn}>
                    <Text style={styles.textIn}>Translation: </Text>
                    <Text style={{ fontSize: RFValue(18) }}>
                      {this.state.word}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      backgroundColor: 'white',
                    }}>
                    <Text
                      style={{
                        marginLeft: 50,
                        fontFamily: 'times',
                        fontSize: RFValue(20),
                        fontWeight: 'bold',
                        color: 'black',
                      }}>
                      Definition:{' '}
                    </Text>
                    <Text style={{ fontSize: RFValue(19) }}>
                      {this.state.definition}
                    </Text>
                  </View>
                </View>
              ) : null}
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

/* 


*/
const styles = StyleSheet.create({
  inputBox: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: 'white',
    outline: 'none',
    color: '#fff',
  },
  searchButton: {
    width: '40%',
    height: 50,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: 'white',
    backgroundColor: 'white',
  },
  textIn: {
    textAlign: 'center',
    fontFamily: 'times',
    fontSize: RFValue(20),
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  text2: {
    fontFamily: 'times',
    fontSize: RFValue(20),
    color: 'white',
  },
});
