import React from 'react';
import {TouchableHighlight, View, Image, Text} from 'react-native';

import {Color} from '../../../Constants/Colors';
import styles from './hotelStyles';

const HotelView = ({info, onTouch}) => {
  return (
    <TouchableHighlight
      onPress={onTouch}
      underlayColor={Color.transparent}
      style={styles.touchView}>
      <View style={styles.container}>
        <Image
          source={{uri: info.cover}}
          resizeMode={'cover'}
          resizeMethod={'resize'}
          style={styles.imageContainer}
        />
        <View style={styles.textContainer}>
          <Text style={styles.titleTextStyle}>{info.name}</Text>
          <Text style={styles.subtitleTextStyle}>{info.location.name}</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
};

export default HotelView;
