import React, {Component} from 'react';
import {SafeAreaView} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class ChatbotView extends Component {
  static defaultProps = {};

  static propTypes = {};

  render() {
    return <SafeAreaView style={styles.container} />;
  }
}
export default ChatbotView;
