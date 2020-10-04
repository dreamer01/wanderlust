import React, { Component } from 'react'
import {
    TouchableHighlight,
    Text,
    StyleSheet
} from 'react-native'
import PropTypes from "prop-types";

import styles from './styles'

export default class AppButton extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        styles: PropTypes.any,
        textStyles: PropTypes.any,
        onTouch: PropTypes.func
    };

    static defaultProps = {
        styles: {},
        textStyles: {},
        onTouch: () => { }
    };

    render() {
        return (
             <TouchableHighlight style={[styles.viewStyle, this.props.styles]} onPress={this.props.onTouch} underlayColor={'transparent'}>
                 <Text style={[styles.textStyle, this.props.textStyles]}>{this.props.title}</Text>
             </TouchableHighlight>    
        );
    }
}