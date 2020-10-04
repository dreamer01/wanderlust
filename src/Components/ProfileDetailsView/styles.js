import { StyleSheet } from "react-native";
import { Color } from "../../Constants/Colors";

export default StyleSheet.create({
  container: {
      padding: 10,
      flexDirection: 'row'
  },
  profileImageStyle:{
      width: 100,
      height: 100,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: Color.themeDark
  }
});
