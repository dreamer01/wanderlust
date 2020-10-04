import React, { Component } from 'react';
import { ImageBackground, Text, View  } from 'react-native';

import { Images } from '../../../Constants/Assets';
import I18n from '../../../localization/i18n';
import Routes from '../../../Navigations/Routes';
import AppButton from '../../../Components/base-componets/AppButton';

import styles from './styles'

class WelcomeView extends Component {
    static navigationOptions = {
        header: null
    }

    signInButtonAction = this.signInButtonAction.bind(this);
    signUpButtonAction = this.signUpButtonAction.bind(this);

    signInButtonAction() {
        this.props.navigation.navigate(Routes.LoginView)
    }

    signUpButtonAction() {
        this.props.navigation.navigate(Routes.SignUpView)
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={Images.splash} style={styles.imageView} >
                    <View style={styles.topView}>
                        <Text style={styles.headingStyles}>{I18n.t("welcome01")}</Text>
                        <Text style={styles.detailStyles}>{I18n.t("welcome02")}</Text>
                    </View>
                    <View style={styles.bottomView}>
                        <AppButton title={I18n.t("welcome03")}
                            onTouch={this.signInButtonAction}
                            styles={styles.signInButtonStyle} />
                        <AppButton title={I18n.t("welcome04")}
                            onTouch={this.signUpButtonAction}
                            styles={styles.signUpButtonStyle} 
                            textStyles={styles.signUpButtonTextStyle}/>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

export default WelcomeView;