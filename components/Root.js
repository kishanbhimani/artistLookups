import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  StatusBar,
  TextInput,
  ListView,
  View
} from 'react-native';
import colors from '../utils/styleColors';

import TouchableListItem from './TouchableListItem';

export default class Root extends Component {

  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => { console.log("row - ",r1,r2); return r1 !== r2},
    });

    const data = ['Rocky', 'Boogie', 'Hoodie', 'A Great Big World', 'Ferg', 'Salt', 'Salt', 'Salt', 'A Perfect Circle', 'Josh A', 'Twelvyy', 'Deadman', 'Just A Gent', 'Mob', 'Upon A Burning Body','Sir Mix-A-Lot'];

    this.state = { artists: dataSource.cloneWithRows(data) };
  }

  renderRow = (artist, sId, rId) => {
    return (
      <View style={styles.row}>
          <TouchableListItem rid={ rId }
            artist={ artist }
            artistImage={ null } />
      </View>
    );
  };

  render() {
    const { artists } = this.state;
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />

        <Text style={styles.welcome}>
          Search for Artist!
        </Text>
        <TextInput style={ styles.searchBox } />

        <ListView dataSource={ artists }
          style={{ flex: 1, alignSelf: 'stretch' }}
          renderRow={ this.renderRow } />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: colors.lightGray,
    padding: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 30,
    color: colors.blue
  },
  instructions: {
    textAlign: 'center',
    color: colors.black,
    marginBottom: 5,
  },
  searchBox: {
    height: 40,
    borderColor: colors.gray,
    borderWidth: 1,
    marginBottom: 10,
    fontWeight: '300',
    borderRadius: 3,
    padding: 10,

  },
  row: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 3,
    marginBottom: 1
  }
});
