import { StyleSheet } from 'react-native'
import { AppFont } from '../../../Constants/Fonts';
import { Color } from '../../../Constants/Colors';

export default StyleSheet.create({
    container: {
        flex: 1
    },
    imageView: {
        flex: 1
    },
    topView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    headingStyles: {
        fontSize: 30,
        fontFamily: AppFont.titleLargeMedium.name,
        fontWeight: AppFont.titleLargeMedium.weight,
        color: Color.brightText
    },
    detailStyles: {
        marginTop: 20,
        fontSize: AppFont.titleSmall.size,
        fontFamily: AppFont.titleSmall.name,
        fontWeight: AppFont.titleSmall.weight,
        color: Color.brightText
    },
    bottomView: {
        flex: 1,
        justifyContent: "center"
    },
    signInButtonStyle: {
        marginBottom: 20,
        marginHorizontal: 20,
        backgroundColor: Color.themeBackground
    },
    signUpButtonStyle: {
        marginHorizontal: 20,
        backgroundColor: Color.themeDark
    },
    signUpButtonTextStyle:{
        color: Color.brightText
    }
});
