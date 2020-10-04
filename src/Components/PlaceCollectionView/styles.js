import { StyleSheet } from 'react-native'
import { Color } from '../../Constants/Colors'
import { AppFont } from '../../Constants/Fonts'
import AppStyles from '../../Constants/AppStyles'

export default StyleSheet.create({
  tableView: {
    paddingHorizontal: 10
  },
  touchView:{
    borderRadius: 5,
    margin: 10,
    ...AppStyles.shadow
  },
  container: {
    borderRadius: 5,
    overflow: 'hidden',
    width: 120,
    aspectRatio: 1.25,
    justifyContent: 'flex-end',
  },
  textContainer: {
    flexDirection: 'row'
  },
  titleTextStyle: {
    marginBottom: 10,
    textAlign: 'center',
    fontSize: AppFont.titleSmallMedium.size,
    fontFamily: AppFont.titleSmallMedium.name,
    fontWeight: AppFont.titleSmallMedium.weight,
    color: Color.brightText,
    backgroundColor: '#00000080',
    borderRadius: 5,
    padding: 5
  },
  headerContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  headerTitleTextStyle: {
    fontSize: AppFont.titleExtraLargeBold.size,
    fontFamily: AppFont.titleExtraLargeBold.name,
    fontWeight: AppFont.titleExtraLargeBold.weight,
    color: Color.darkText
  },
  sellAllTextStyle: {
    fontSize: AppFont.titleSmallMedium.size,
    fontFamily: AppFont.titleSmallMedium.name,
    fontWeight: AppFont.titleSmallMedium.weight,
    color: Color.themeText
  }
})
