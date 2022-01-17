import { useEffect } from "react";
import { StyleSheet, Text } from "react-native";
import * as Font from "expo-font";

const AppText = ({ children, style, ...otherProps }) => {
  useEffect(() => {
    Font.loadAsync({
      "font-regular": require("../../assets/fonts/Poppins-Regular.ttf"),
      "font-medium": require("../../assets/fonts/Poppins-Medium.ttf"),
      "font-semibold": require("../../assets/fonts/Poppins-SemiBold.ttf"),
      "font-bold": require("../../assets/fonts/Poppins-Bold.ttf"),
    });
  }, []);

  return (
    <Text {...otherProps} style={[styles.text, style]}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: "font-regular",
    fontSize: 14,
  },
});

export default AppText;
