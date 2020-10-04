import { StyleSheet } from 'react-native'
import { Color } from '../../Constants/Colors'
import { AppFont } from '../../Constants/Fonts'
import AppStyles from '../../Constants/AppStyles'

export default StyleSheet.create({
  searchBarStyle: {
    height: 50,
    marginHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
    flexDirection: 'row',
    overflow: 'visible',
    backgroundColor: Color.themeBackground,
    borderRadius: 10,
    ...AppStyles.shadow
  },
  searchBarButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchIconStyle: {
    resizeMode: 'center'
  },
  lineView: {
    width: 1,
    height: 30,
    backgroundColor: Color.brightBorder
  },
  inputViewStyle: {
    flex: 1,
    height: 50,
    padding: 0,
    paddingLeft: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: AppFont.titleMedium.size,
    fontFamily: AppFont.titleMedium.name,
    fontWeight: AppFont.titleMedium.weight
  }
})
