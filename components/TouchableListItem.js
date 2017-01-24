import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import colors from '../utils/styleColors';
import RenderWithAnimation from './RenderWithAnimation'

const placeholder = require('../assets/music-icon.jpg');

const TouchableListItem = ({ artistIndex, artist, artistImage }) => {
  const image = (
    artistImage ? { uri: artistImage } : placeholder
  );

  return (
    <TouchableOpacity
      underlayColor={ colors.gray }>

      <RenderWithAnimation delay={ artistIndex * 25 }>
        <View style={ styles.mediaObject }>
          <Image source={ image } style={ styles.image } />
          <Text style={ styles.text }>{ artist }</Text>
        </View>
      </RenderWithAnimation>

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
  artistIndex: React.PropTypes.string,
  artist: React.PropTypes.string,
  artistImage: React.PropTypes.string,
};
