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
import { debounce } from 'lodash';
import { searchArtist } from '../utils/api';


export default class Root extends Component {

  constructor(props) {
    super(props);

    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = { artists: dataSource };
  }

  renderRow = (artist, sId, rId) => {
    const imageUrl = artist.images[0] ? artist.images[0].url : null;

    return (
      <View style={styles.row}>
          <TouchableListItem artistIndex={ rId }
            artist={ artist.name }
            artistImage={ imageUrl } />
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
        <TextInput style={ styles.searchBox }
            onChangeText={ this.getArtist }/>

        <ListView dataSource={ artists }
          style={{ flex: 1, alignSelf: 'stretch' }}
          renderRow={ this.renderRow } />
      </View>
    );
  }

  getArtist = debounce(artistName => {
    searchArtist(artistName)
      .then(artists => {
        this.setState({
          artists: this.state.artists.cloneWithRows(artists),
        });
      })
      .catch((error) => {
        throw error;
      });
  }, 400);
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
