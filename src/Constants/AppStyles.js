import { StyleSheet } from 'react-native'
import { Color } from './Colors';

export default StyleSheet.create({
  shadow: {
    shadowColor: Color.shadow,
    shadowOpacity: 0.2,
    shadowOffset:{ width: 0, height: 4},
    elevation: 5
  },
})
