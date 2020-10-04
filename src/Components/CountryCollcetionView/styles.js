import { StyleSheet } from 'react-native'
import { Color } from '../../Constants/Colors'
import { AppFont } from '../../Constants/Fonts'
import AppStyles from '../../Constants/AppStyles'

export default StyleSheet.create({
  tableView: {
    paddingHorizontal: 10
  },
  touchView:{
    marginVertical: 10,
    marginRight: 10,
    borderRadius: 20,
    ...AppStyles.shadow
  },
  textContainer: {
    paddingHorizontal: 20,
    backgroundColor: Color.offWhiteBackground,
    borderRadius: 20
  },
  titleTextStyle:{
    textAlign: 'center',
    fontSize: AppFont.titleSmall.size,
    fontFamily: AppFont.titleSmall.name,
    fontWeight: AppFont.titleSmall.weight,
    color: Color.darkText,
    padding: 10
  }
})
