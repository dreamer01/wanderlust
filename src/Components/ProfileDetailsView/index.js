import React, { Component } from "react";
import { Image, View } from 'react-native';
import PropTypes from "prop-types";

import styles from "./styles";

class ProfileDetailsView extends Component {
  static propTypes = {
    profileImageUrl: PropTypes.string
  };

  static defaultProps = {
    colors: Colors.linearGradColor
  };


  render() {
    return (
        <View style={styles.container}>
            <Image source={} style={styles.profileImageStyle} />
        </View>    
    );
  }
}
export default ProfileDetailsView;
