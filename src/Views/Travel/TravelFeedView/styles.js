import { StyleSheet } from "react-native";
import { ScreenWidth } from "../../../Constants/Constants";

export default StyleSheet.create({
  container: {
    flex: 1
  },
  favtItem:{
    width: ScreenWidth,
    height: (ScreenWidth * 9 / 16)
  },
  cities:{
    width: ScreenWidth,
    height: 120
  }
});
