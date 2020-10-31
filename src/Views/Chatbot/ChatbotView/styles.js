import {StyleSheet} from 'react-native';

import {Color} from '../../../Constants/Colors';
import {AppFont} from '../../../Constants/Fonts';
import {ScreenWidth} from '../../../Constants/Constants';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    padding: 20,
  },
  groupContainer: {},
  loader: {
    width: ScreenWidth,
    height: ((ScreenWidth * 9) / 16) * 2,
  },
  headerTitle: {
    fontSize: AppFont.titleExtraLargeBold.size,
    fontFamily: AppFont.titleExtraLargeBold.name,
    fontWeight: AppFont.titleExtraLargeBold.weight,
    color: Color.darkText,
  },
});
