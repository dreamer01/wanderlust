import { StyleSheet } from 'react-native'

import { Color } from '../../../Constants/Colors'
import { AppFont } from '../../../Constants/Fonts'
import AppStyles from '../../../Constants/AppStyles'

export default StyleSheet.create({
  main:{
    margin:0,
    width: 2,
    height: 40,
    backgroundColor: 'transparent'
  },
  container: {
    borderColor: Color.themeBackground,  
    borderWidth: 3,
    borderRadius: 20,
    width: 40,
    aspectRatio: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    overflow: 'hidden',
    backgroundColor: 'red',
    justifyContent: 'flex-end',
    ...AppStyles.shadow
  },
  textContainer: {
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: '#00000080'
  },
  titleTextStyle: {
    textAlign: 'center',
    fontSize: AppFont.titleSmallMedium.size,
    fontFamily: AppFont.titleSmallMedium.name,
    fontWeight: AppFont.titleSmallMedium.weight,
    color: Color.brightText
  }
})