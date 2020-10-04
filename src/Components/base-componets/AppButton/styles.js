import { StyleSheet } from 'react-native'

import { AppFont } from '../../../Constants/Fonts'
import { Color } from '../../../Constants/Colors'
import AppStyles from '../../../Constants/AppStyles'

export default StyleSheet.create({
  viewStyle: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    ...AppStyles.shadow
  },
  textStyle: {
    fontSize: AppFont.titleLargeBold.size,
    fontFamily: AppFont.titleLargeBold.name,
    fontWeight: AppFont.titleLargeBold.weight,
    color: Color.themeDark
  }
})
