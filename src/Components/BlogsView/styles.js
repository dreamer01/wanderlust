import { StyleSheet } from 'react-native'
import { Color } from '../../Constants/Colors'
import { AppFont } from '../../Constants/Fonts'
import AppStyles from '../../Constants/AppStyles'

export default StyleSheet.create({
  tableView: {
    paddingHorizontal: 10
  },
  container: {
    borderRadius: 15,  
    overflow: 'hidden',
    flexDirection: 'row'
  },
  imageContainer:{
    width: 80
  },
  touchView: {
    margin: 15,
    borderRadius: 15,
    ...AppStyles.shadow
  },
  textContainer: {
    flex: 1,  
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Color.themeBackground,
  },
  titleTextStyle: {
    fontSize: AppFont.titleMedium.size,
    fontFamily: AppFont.titleMedium.name,
    fontWeight: AppFont.titleMedium.weight,
    color: Color.darkText
  },
  subtitleTextStyle:{
    marginTop: 2,
    fontSize: AppFont.titleSmall.size,
    fontFamily: AppFont.titleSmall.name,
    fontWeight: AppFont.titleSmall.weight,
    color: Color.lightText
  },
  detailsTextStyle:{
    marginTop: 5,
    fontSize: AppFont.titleExtraSmall.size,
    fontFamily: AppFont.titleExtraSmall.name,
    fontWeight: AppFont.titleExtraSmall.weight,
    color: Color.darkText
  },
  favouriteButtonContainer:{
    justifyContent: 'center',
    paddingHorizontal:10,
    backgroundColor: Color.themeBackground
  },
  favouriteButton:{
    width: 40,
    height: 40,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
