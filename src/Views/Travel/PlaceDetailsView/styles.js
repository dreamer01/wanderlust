import { StyleSheet } from "react-native";
import { ScreenWidth } from "../../../Constants/Constants";
import {Color} from '../../../Constants/Colors';
import {AppFont} from '../../../Constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  imageDetails: {
    width: ScreenWidth,
    height: ((9/16)* ScreenWidth)
  },
  nameTitle: {
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: AppFont.titleExtraLargeBold.size,
    fontFamily: AppFont.titleExtraLargeBold.name,
    fontWeight: AppFont.titleExtraLargeBold.weight,
    color: Color.darkText,
  },
  city:{
    fontSize: AppFont.titleSmallMedium.size,
    fontFamily: AppFont.titleSmallMedium.name,
    fontWeight: AppFont.titleSmallMedium.weight,
    color: Color.themeDark,
  },
  des:{
    marginHorizontal: 20,
    marginVertical: 10,
    fontSize: AppFont.titleSmallMedium.size,
    fontFamily: AppFont.titleSmallMedium.name,
    fontWeight: AppFont.titleSmallMedium.weight,
    color: Color.lightText,
  },
  nameLocation: {
    flexDirection: "row",
    alignItems: 'center',
    marginHorizontal: 20
  },
  location:{
    height: 20,
    width: 20,
    marginRight: 10,
  },
  signInButtonStyle: {
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: Color.themeDark
  },
  signInButtonTextStyle: {
    color: Color.brightText
  },
});
