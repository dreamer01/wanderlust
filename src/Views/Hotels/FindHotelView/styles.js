import { StyleSheet } from "react-native";
import { Color } from "../../../Constants/Colors";
import AppStyles from "../../../Constants/AppStyles";
import { AppFont } from "../../../Constants/Fonts";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  oneWayReturnButtonContainer:{
    marginVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  oneWayButton:{
    width: '48%',
    paddingHorizontal: 20,
    height: 35,
    backgroundColor: Color.themeDark,
    ...AppStyles.shadow
  },
  oneWayButtonText:{
    fontSize: AppFont.titleMedium.size,
    fontFamily: AppFont.titleMedium.name,
    fontWeight: AppFont.titleMedium.weight,
    color: Color.brightText
  },
  inputViewStyle:{
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
  dateView:{
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 5,
    paddingHorizontal: 10,
    height: 55,
    backgroundColor: Color.offWhiteBackground,
    ...AppStyles.shadow
  },
  dateInputView:{
    flex: 1,
    fontSize: AppFont.title.size,
    fontFamily: AppFont.title.name,
    fontWeight: AppFont.title.weight
  },
  lineView:{
    marginVertical: 10,
    margin: 10,
    width: 1,
    backgroundColor: Color.lightBorder
  },

  checkoutButtonStyle: {
    marginTop: 40,
    marginHorizontal: 20,
    backgroundColor: Color.themeDark
  },
  checkoutButtonTextStyle: {
    color: Color.brightText
  }
});
