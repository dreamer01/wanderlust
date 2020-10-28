import {StyleSheet} from 'react-native';
import {Color} from '../../../Constants/Colors';
import {AppFont} from '../../../Constants/Fonts';
import AppStyles from '../../../Constants/AppStyles';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidView: {
    flexGrow: 1,
  },
  messageArea: {
    flex: 1,
  },
  message: {
    backgroundColor: '#EAE6FF',
    padding: 10,
    marginHorizontal: 15,
    marginVertical: 8,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
  selfMessage: {
    backgroundColor: '#E3FCEF',
    alignSelf: 'flex-end',
  },
  textStyle: {
    fontSize: AppFont.titleMedium.size,
    fontFamily: AppFont.titleMedium.name,
    fontWeight: AppFont.titleMedium.weight,
    color: Color.darkText,
  },
  selfTextStyle: {
    textAlign: 'right',
  },
  authorStyle: {
    marginTop: 2,
    fontSize: AppFont.titleExtraSmall.size,
    fontFamily: AppFont.titleExtraSmall.name,
    fontWeight: AppFont.titleExtraSmall.weight,
    color: Color.lightText,
  },
  chatInput: {
    height: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputViewStyle: {
    marginVertical: 10,
    marginLeft: 15,
    borderRadius: 5,
    paddingLeft: 10,
    height: 55,
    width: '80%',
    backgroundColor: Color.offWhiteBackground,
    padding: 0,
    fontSize: AppFont.title.size,
    fontFamily: AppFont.title.name,
    fontWeight: AppFont.title.weight,
  },
  backIconStyle: {
    height: 55,
    width: 55,
    borderRadius: 5,
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EAE6FF',
    transform: [{rotate: '180deg'}],
  },
});
