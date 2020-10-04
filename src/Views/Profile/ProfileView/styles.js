import { StyleSheet } from 'react-native'
import { Color } from '../../../Constants/Colors'
import { AppFont } from '../../../Constants/Fonts'
import AppStyles from '../../../Constants/AppStyles'

export default StyleSheet.create({
  container: {
    flex: 1
  },
  keyboardAvoidView: {
    flexGrow: 1
  },
  middleView: {},
  profileView: {
    flexDirection: 'row',
    padding: 10
  },
  imageContainer:{
    width: 70,
    height: 70,
    overflow: 'hidden',
    resizeMode: 'center',
    borderRadius: 35,
    borderWidth: 2,
    borderColor: Color.themeDark
  },
  profileImage: {
    width: 70,
    height: 70,
  },
  titleDetailsView: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15
  },
  titleText: {
    fontSize: AppFont.titleLargeMedium.size,
    fontFamily: AppFont.titleLargeMedium.name,
    fontWeight: AppFont.titleLargeMedium.weight,
    color: Color.darkText
  },
  subtitleText: {
    fontSize: AppFont.titleSmall.size,
    fontFamily: AppFont.titleSmall.name,
    fontWeight: AppFont.titleSmall.weight,
    color: Color.lightText
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
  logoutButtonStyle: {
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: Color.themeDark
  },
  logoutButtonTextStyle: {
    color: Color.brightText
  },
})
