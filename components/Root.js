import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  View
} from 'react-native';
import colors from '../utils/styleColors';

export default class Root extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.welcome}>
          Search for Artist!
        </Text>
        <TextInput style={ styles.searchBox } />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    marginLeft: 16,
    color: colors.blue
  },
  instructions: {
    textAlign: 'center',
    color: colors.black,
    marginBottom: 5,
  },
  searchBox: {
    height: 40,
    borderColor: colors.black,
    borderWidth: 2,
    margin: 16,
    paddingLeft: 10,
    fontWeight: '800',
  }
});
