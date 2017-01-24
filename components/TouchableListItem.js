import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../utils/styleColors';

const placeholder = require('../assets/music-icon.jpg');

const TouchableListItem = ({ artist, artistImage }) => {
  const image = (
    artistImage ? { uri: artistImage } : placeholder
  );

  return (
    <TouchableOpacity
      underlayColor={ colors.gray }>

      <View style={ styles.mediaObject }>
        <Image source={ image } style={ styles.image } />
        <Text style={ styles.text }>{ artist }</Text>
      </View>

    </TouchableOpacity>
  );
};

export default TouchableListItem;

const styles = StyleSheet.create({
  mediaObject: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row'
  },
  text: {
    flex: 1,
    color: colors.black
  },
  image: {
    backgroundColor: colors.gray,
    width: 40,
    height: 40,
    marginRight: 16,
    marginLeft: 5,
  },
});

TouchableListItem.propTypes = {
  artist: React.PropTypes.string,
  artistImage: React.PropTypes.string,
};
