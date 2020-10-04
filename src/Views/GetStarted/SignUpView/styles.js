import { StyleSheet } from 'react-native'
import { AppFont } from '../../../Constants/Fonts'
import { Color } from '../../../Constants/Colors'
import AppStyles from '../../../Constants/AppStyles'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.themeBackground
  },
  keyboardAvoidView: {
    flexGrow: 1
  },
  middleView: {
    flex: 1,
    paddingTop: 50
  },
  inputViewStyle: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    paddingLeft: 10,
    height: 55,
    backgroundColor: Color.offWhiteBackground,
    padding: 0,
    fontSize: AppFont.title.size,
    fontFamily: AppFont.title.name,
    fontWeight: AppFont.title.weight,
    ...AppStyles.shadow
  },
  signUpButtonStyle: {
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: Color.themeDark
  },
  signUpButtonTextStyle: {
    color: Color.brightText
  },
  alreadyAccountContainer: {
    marginTop: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  alreadyAccountText: {
    fontSize: AppFont.title.size,
    fontFamily: AppFont.title.name,
    fontWeight: AppFont.title.weight
  },
  signInButtonTextStyle:{
    fontSize: AppFont.title.size,
    fontFamily: AppFont.title.name,
    fontWeight: AppFont.title.weight,
    color: Color.themeDark
  }
})
