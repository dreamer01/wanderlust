import { StyleSheet } from 'react-native'

import { Color } from '../../Constants/Colors'
import { AppFont } from '../../Constants/Fonts'
import { ScreenWidth } from '../../Constants/Constants'
import AppStyles from '../../Constants/AppStyles'

export default StyleSheet.create({
  mainContainer: {
    width: ScreenWidth,
    padding: 20
  },
  touchContainer: {
    borderRadius: 10,
    ...AppStyles.shadow
  },
  container: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: Color.themeBackground
  },
  imageContainer: {
    overflow: 'hidden',
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 10
  },
  textContainer: {
    padding: 10,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: Color.themeBackground
  },
  titleAndSubtitle: {
    flex: 1,
    paddingLeft: 5
  },
  profilePhotoContainer: {
    width: 90,
    justifyContent: 'center'
  },
  textAndRating: {
    flexDirection: 'row'
  },
  titleTextStyle: {
    textAlign: 'left',
    fontSize: AppFont.titleBold.size,
    fontFamily: AppFont.titleBold.name,
    fontWeight: AppFont.titleBold.weight,
    color: Color.darkText
  },
  subtitleTextStyle: {
    marginTop: 5,
    textAlign: 'left',
    fontSize: AppFont.titleExtraSmall.size,
    fontFamily: AppFont.titleExtraSmall.name,
    fontWeight: AppFont.titleExtraSmall.weight,
    color: Color.lightText
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
  },
  placeConatainerView: {
    padding: 10
  },
  placeTableView: {
    height: 40
  },
  dotContainer: {
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  dotsItem: {
    marginLeft: 5,
    height: 4,
    borderRadius: 2,
    backgroundColor: Color.darkText
  }
})
