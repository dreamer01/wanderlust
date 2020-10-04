import { StyleSheet } from 'react-native'
import { Color } from '../../Constants/Colors'
import { AppFont } from '../../Constants/Fonts'
import AppStyles from '../../Constants/AppStyles'

export default StyleSheet.create({
  tableView: {
    paddingHorizontal: 10
  },
  container: {
    borderRadius: 10,  
    overflow: 'hidden',
    flexDirection: 'row'
  },
  imageContainer:{
    width: 90
  },
  touchView: {
    width: 300,
    margin: 15,
    borderRadius: 10,
    ...AppStyles.shadow
  },
  textContainer: {
    flex: 1,  
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: Color.themeBackground,
  },
  titlePriceContainer:{
    flexDirection: 'row',
  },
  titleTextStyle: {
    flex: 1,
    fontSize: AppFont.titleMedium.size,
    fontFamily: AppFont.titleMedium.name,
    fontWeight: AppFont.titleMedium.weight,
    color: Color.darkText
  },
  priceText:{
    textAlign: 'right',
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
    color: Color.errorText
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
