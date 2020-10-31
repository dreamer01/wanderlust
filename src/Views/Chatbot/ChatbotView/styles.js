import {StyleSheet} from 'react-native';

import {Color} from '../../../Constants/Colors';
import {AppFont} from '../../../Constants/Fonts';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  chatContainer: {
    flex: 1,
    padding: 20,
  },
  groupContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  headerTitle: {
    fontSize: AppFont.titleExtraLargeBold.size,
    fontFamily: AppFont.titleExtraLargeBold.name,
    fontWeight: AppFont.titleExtraLargeBold.weight,
    color: Color.darkText,
  },
});
