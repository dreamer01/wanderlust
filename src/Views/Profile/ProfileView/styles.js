import {StyleSheet} from 'react-native';
import {Color} from '../../../Constants/Colors';
import {AppFont} from '../../../Constants/Fonts';
import AppStyles from '../../../Constants/AppStyles';
import {ScreenWidth} from '../../../Constants/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidView: {
    flexGrow: 1,
  },
  middleView: {
    flex: 1,
  },
  profileView: {
    flexDirection: 'row',
    padding: 20,
  },
  imageContainer: {
    width: 70,
    height: 70,
    overflow: 'hidden',
    resizeMode: 'center',
    borderRadius: 35,
    borderWidth: 1,
    borderColor: Color.themeDark,
  },
  profileImage: {
    width: 70,
    height: 70,
  },
  titleDetailsView: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 15,
  },
  titleText: {
    fontSize: AppFont.titleExtraLargeMedium.size,
    fontFamily: AppFont.titleExtraLargeMedium.name,
    fontWeight: AppFont.titleExtraLargeMedium.weight,
    color: Color.darkText,
  },
  subtitleText: {
    fontSize: AppFont.titleSmall.size,
    fontFamily: AppFont.titleSmall.name,
    fontWeight: AppFont.titleSmall.weight,
    color: Color.lightText,
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
    ...AppStyles.shadow,
  },
  carousel: {
    flex: 1,
  },
  cityLoader: {
    width: ScreenWidth,
    height: 120,
  },
  logoutButtonStyle: {
    margin: 20,
    backgroundColor: Color.themeDark,
  },
  logoutButtonTextStyle: {
    color: Color.brightText,
  },
});
